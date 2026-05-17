const CITY_MAP = new Map(CITIES.map(c => [c.city, c]));

// ── Map initialization ──────────────────────────────────────────────────────
const map = L.map('map', {
  zoomControl: false,
  attributionControl: true,
  minZoom: 2,
  maxZoom: 12,
  zoomSnap: 0.5,
  wheelPxPerZoomLevel: 80,
  maxBounds: [[-90, -180], [90, 180]],
  maxBoundsViscosity: 1.0
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19,
  noWrap: true
}).addTo(map);

L.control.zoom({ position: 'bottomright' }).addTo(map);

// ── Marker factory ──────────────────────────────────────────────────────────
function makeIcon(city) {
  const { markerColor } = REGION_META[city.region];
  return L.divIcon({
    className: 'city-marker',
    html: `<div class="marker-wrap">
      <div class="marker-dot" style="background:${markerColor};box-shadow:0 0 6px ${markerColor}99"></div>
      <div class="marker-ring" style="border-color:${markerColor}"></div>
    </div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    tooltipAnchor: [0, -18]
  });
}

// ── Tooltip factory ─────────────────────────────────────────────────────────
function makeTooltip(city) {
  const meta   = REGION_META[city.region];
  const flag   = COUNTRY_FLAGS[city.country] || '';
  const yearEl = city.year ? `<div class="tt-year">${city.year}년 방문</div>` : '';
  return `<div class="tt-card">
    <div class="tt-header" style="background:linear-gradient(135deg,${meta.gradient[0]},${meta.gradient[1]})">
      <span class="tt-flag">${flag}</span>
    </div>
    <div class="tt-body">
      <div class="tt-region">${meta.emoji} ${meta.label}</div>
      <div class="tt-city">${city.city}<span class="tt-ko">${CITY_KO[city.city] || ''}</span></div>
      <div class="tt-country">${city.country}<span class="tt-ko">${COUNTRY_KO[city.country] || ''}</span></div>
      ${yearEl}
      <div class="tt-hint">클릭해서 자세히 보기 →</div>
    </div>
  </div>`;
}

// ── Route marker factories ──────────────────────────────────────────────────
function makeNumMarker(lat, lon, color, num, animated) {
  return L.marker([lat, lon], {
    icon: L.divIcon({
      className: 'route-num-marker',
      html: `<div class="route-num-dot${animated ? '' : ' no-anim'}" style="background:${color}">${num}</div>`,
      iconSize: [24, 24], iconAnchor: [12, 12]
    }),
    pane: 'routeNumPane', interactive: false
  });
}

function makeTransportMarker(lat, lon, emoji) {
  return L.marker([lat, lon], {
    icon: L.divIcon({
      className: 'route-transport-marker',
      html: `<div class="route-transport-dot">${emoji}</div>`,
      iconSize: [0, 0], iconAnchor: [0, 0]
    }),
    pane: 'routeTransportPane', interactive: false
  });
}

// ── Add markers ─────────────────────────────────────────────────────────────
const allLatLngs = [];

CITIES.forEach(city => {
  const marker = L.marker([city.lat, city.lon], { icon: makeIcon(city) });

  marker.bindTooltip(makeTooltip(city), {
    className: 'city-tooltip',
    direction: 'top',
    offset: [0, -18],
    opacity: 1
  });

  marker.on('click', () => {
    window.location.href = `city.html?id=${getCityId(city.city)}`;
  });

  marker.on('add', function () {
    const el    = this.getElement();
    const dot   = el.querySelector('.marker-dot');
    const color = REGION_META[city.region].markerColor;
    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1.55)';
      dot.style.boxShadow = `0 0 12px ${color}cc`;
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      dot.style.boxShadow = `0 0 6px ${color}99`;
    });
  });

  marker.addTo(map);
  allLatLngs.push([city.lat, city.lon]);
});

// ── Fit view to all markers ─────────────────────────────────────────────────
window.addEventListener('load', () => {
  map.invalidateSize();
  if (allLatLngs.length) {
    if (window.innerWidth < 768) {
      map.setView([36.5, 127.5], 6);
    } else {
      map.fitBounds(allLatLngs, { padding: [60, 60], maxZoom: 4 });
    }
  }
});

// ── Stats ───────────────────────────────────────────────────────────────────
document.getElementById('stat-cities').textContent    = CITIES.length;
document.getElementById('stat-countries').textContent = new Set(CITIES.map(c => c.country)).size;

// ── Custom panes ────────────────────────────────────────────────────────────
map.createPane('routePane');
map.getPane('routePane').style.zIndex = 310;

map.createPane('routeNumPane');
const numPane = map.getPane('routeNumPane');
numPane.style.zIndex = 650;
numPane.style.pointerEvents = 'none';

map.createPane('routeTransportPane');
const transportPane = map.getPane('routeTransportPane');
transportPane.style.zIndex = 400;
transportPane.style.pointerEvents = 'none';

// ── Build route polylines ───────────────────────────────────────────────────
const routeLayers = {};

ROUTES.forEach(route => {
  const lines = route.segments.map(segment => {
    const cities   = Array.isArray(segment) ? segment : segment.cities;
    const segColor = Array.isArray(segment) ? route.color : (segment.color || route.color);

    const coords = cities.map(name => {
      const city = CITY_MAP.get(name);
      if (!city) { console.warn(`[routes] 도시를 찾을 수 없습니다: "${name}"`); return null; }
      return [city.lat, city.lon];
    }).filter(Boolean);

    const line = L.polyline(coords, {
      pane:      'routePane',
      color:     segColor,
      weight:    2.5,
      opacity:   0.85,
      dashArray: '8, 5',
      lineJoin:  'round'
    });

    line.bindTooltip(
      `<div class="rt-name">${route.name}</div>
       <div class="rt-period">${route.period}</div>
       <div class="rt-path">${cities.join(' → ')}</div>`,
      { sticky: true, className: 'route-tt', opacity: 1 }
    );

    return line;
  });

  routeLayers[route.id] = { group: L.layerGroup(lines), animMarkers: [], timeouts: [], active: false, hasAnimated: false };
});

// ── Populate route toggle buttons ───────────────────────────────────────────
const routesList   = document.getElementById('routes-list');
let activeRouteId  = null;

ROUTES.forEach(route => {
  const btn = document.createElement('button');
  btn.className  = 'route-btn';
  btn.dataset.id = route.id;
  btn.innerHTML  = `
    <span class="route-color-dot" style="background:${route.color};box-shadow:0 0 8px ${route.color}"></span>
    <div class="route-info">
      <div class="route-name">${route.name}</div>
      <div class="route-period">${route.period}</div>
    </div>`;

  btn.addEventListener('click', () => {
    const layer     = routeLayers[route.id];
    const wasActive = layer.active;

    // 현재 활성 루트 비활성화
    if (activeRouteId) {
      const l = routeLayers[activeRouteId];
      l.active = false;
      map.removeLayer(l.group);
      l.timeouts.forEach(t => clearTimeout(t));
      l.timeouts = [];
      l.animMarkers.forEach(m => map.removeLayer(m));
      l.animMarkers = [];
      document.querySelector(`.route-btn[data-id="${activeRouteId}"]`).classList.remove('active');
      activeRouteId = null;
    }

    if (!wasActive) {
      activeRouteId = route.id;
      layer.active  = true;
      layer.group.addTo(map);
      btn.classList.add('active');

      // 스텝 빌드: num(도시번호) / transport(이동) 교차
      const steps = [];
      const seen  = new Set();
      let num = 1;

      route.segments.forEach(segment => {
        const cities    = Array.isArray(segment) ? segment : segment.cities;
        const transport = (!Array.isArray(segment) && segment.transport) ? segment.transport : [];

        cities.forEach((cityName, i) => {
          if (!seen.has(cityName)) {
            seen.add(cityName);
            const city = CITY_MAP.get(cityName);
            if (city) steps.push({ type: 'num', lat: city.lat, lon: city.lon, num: num++ });
          }
          if (transport[i] !== undefined) {
            const a = CITY_MAP.get(cityName);
            const b = CITY_MAP.get(cities[i + 1]);
            if (a && b) steps.push({
              type: 'transport',
              fromLat: a.lat, fromLon: a.lon,
              toLat: (a.lat + b.lat) / 2,
              toLon: (a.lon + b.lon) / 2,
              emoji: transport[i]
            });
          }
        });
      });

      if (!layer.hasAnimated) {
        layer.hasAnimated = true;

        const NUM_GAP       = 214;
        const TRANSPORT_DUR = 500;
        let cumDelay = 0;
        steps.forEach(step => {
          step.delay = cumDelay;
          cumDelay  += step.type === 'num' ? NUM_GAP : TRANSPORT_DUR;
        });

        steps.forEach(step => {
          const t = setTimeout(() => {
            if (!layer.active) return;
            if (step.type === 'num') {
              const m = makeNumMarker(step.lat, step.lon, route.color, step.num, true);
              m.addTo(map);
              layer.animMarkers.push(m);
            } else {
              const m = makeTransportMarker(step.fromLat, step.fromLon, step.emoji);
              m.addTo(map);
              layer.animMarkers.push(m);
              const startTime = performance.now();
              const animMove = (now) => {
                if (!layer.active) return;
                const p = Math.min((now - startTime) / TRANSPORT_DUR, 1);
                const e = p < 0.5 ? 2*p*p : -1 + (4 - 2*p)*p;
                m.setLatLng([
                  step.fromLat + (step.toLat - step.fromLat) * e,
                  step.fromLon + (step.toLon - step.fromLon) * e
                ]);
                if (p < 1) requestAnimationFrame(animMove);
              };
              requestAnimationFrame(animMove);
            }
          }, step.delay);
          layer.timeouts.push(t);
        });

      } else {
        // 2번째 이후 클릭: 즉시 고정 표시
        steps.forEach(step => {
          const m = step.type === 'num'
            ? makeNumMarker(step.lat, step.lon, route.color, step.num, false)
            : makeTransportMarker(step.toLat, step.toLon, step.emoji);
          m.addTo(map);
          layer.animMarkers.push(m);
        });
      }

      const coords = route.segments.flatMap(segment => {
        const cities = Array.isArray(segment) ? segment : segment.cities;
        return cities.map(name => {
          const city = CITY_MAP.get(name);
          return city ? [city.lat, city.lon] : null;
        }).filter(Boolean);
      });
      if (coords.length) map.fitBounds(coords, { padding: [80, 80], maxZoom: 7 });
    }
  });

  routesList.appendChild(btn);
});

// ── Panel collapse toggle ───────────────────────────────────────────────────
const routesToggle = document.getElementById('routes-toggle');
const chevron      = document.querySelector('.routes-chevron');

routesToggle.addEventListener('click', () => {
  const open = routesList.classList.toggle('is-collapsed');
  chevron.classList.toggle('is-collapsed', open);
  routesToggle.setAttribute('aria-expanded', String(!open));
});
