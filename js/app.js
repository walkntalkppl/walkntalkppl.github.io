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
  const meta = REGION_META[city.region];
  return L.divIcon({
    className: 'city-marker',
    html: `<div class="marker-wrap">
      <div class="marker-dot" style="background:${meta.markerColor};box-shadow:0 0 6px ${meta.markerColor}99"></div>
      <div class="marker-ring" style="border-color:${meta.markerColor}"></div>
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
  const hintEl = `<div class="tt-hint">클릭해서 자세히 보기 →</div>`;

  return `<div class="tt-card">
    <div class="tt-header" style="background:linear-gradient(135deg,${meta.gradient[0]},${meta.gradient[1]})">
      <span class="tt-flag">${flag}</span>
    </div>
    <div class="tt-body">
      <div class="tt-region">${meta.emoji} ${meta.label}</div>
      <div class="tt-city">${city.city}<span class="tt-ko">${CITY_KO[city.city] || ''}</span></div>
      <div class="tt-country">${city.country}<span class="tt-ko">${COUNTRY_KO[city.country] || ''}</span></div>
      ${yearEl}
      ${hintEl}
    </div>
  </div>`;
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

  // Brighten dot on hover
  marker.on('add', function () {
    const el  = this.getElement();
    const dot = el.querySelector('.marker-dot');
    el.addEventListener('mouseenter', () => {
      dot.style.transform   = 'translate(-50%,-50%) scale(1.55)';
      dot.style.boxShadow   = `0 0 12px ${REGION_META[city.region].markerColor}cc`;
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform   = 'translate(-50%,-50%) scale(1)';
      dot.style.boxShadow   = `0 0 6px ${REGION_META[city.region].markerColor}99`;
    });
  });

  marker.addTo(map);
  allLatLngs.push([city.lat, city.lon]);
});

// ── Fit view to all markers ─────────────────────────────────────────────────
if (allLatLngs.length > 0) {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    map.setView([36.5, 127.5], 6);
  } else {
    map.fitBounds(allLatLngs, { padding: [60, 60], maxZoom: 4 });
  }
}

// ── Stats ───────────────────────────────────────────────────────────────────
const uniqueCountries = new Set(CITIES.map(c => c.country)).size;
document.getElementById('stat-cities').textContent    = CITIES.length;
document.getElementById('stat-countries').textContent = uniqueCountries;

// ── Route pane (renders below city markers) ─────────────────────────────────
map.createPane('routePane');
map.getPane('routePane').style.zIndex = 310;

// ── Build route polylines ───────────────────────────────────────────────────
const routeLayers = {};

ROUTES.forEach(route => {
  const lines = route.segments.map(segment => {
    // 세그먼트는 배열(단순) 또는 {cities, color} 객체 모두 지원
    const cities   = Array.isArray(segment) ? segment : segment.cities;
    const segColor = Array.isArray(segment) ? route.color : (segment.color || route.color);

    const coords = cities.map(name => {
      const found = CITIES.find(c => c.city === name);
      if (!found) { console.warn(`[routes] 도시를 찾을 수 없습니다: "${name}"`); return null; }
      return [found.lat, found.lon];
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

  routeLayers[route.id] = { group: L.layerGroup(lines), active: false };
});

// ── Populate route toggle buttons ───────────────────────────────────────────
const routesList = document.getElementById('routes-list');

ROUTES.forEach(route => {
  const btn = document.createElement('button');
  btn.className    = 'route-btn';
  btn.dataset.id   = route.id;
  btn.innerHTML    = `
    <span class="route-color-dot" style="background:${route.color};box-shadow:0 0 8px ${route.color}"></span>
    <div class="route-info">
      <div class="route-name">${route.name}</div>
      <div class="route-period">${route.period}</div>
    </div>`;

  btn.addEventListener('click', () => {
    const layer = routeLayers[route.id];
    const wasActive = layer.active;

    // Deactivate all routes
    ROUTES.forEach(r => {
      const l = routeLayers[r.id];
      if (l.active) {
        l.active = false;
        map.removeLayer(l.group);
      }
      document.querySelector(`.route-btn[data-id="${r.id}"]`).classList.remove('active');
    });

    // Toggle: activate only if it was not already active
    if (!wasActive) {
      layer.active = true;
      layer.group.addTo(map);
      btn.classList.add('active');

      const coords = route.segments.flatMap(segment => {
        const cities = Array.isArray(segment) ? segment : segment.cities;
        return cities.map(name => {
          const found = CITIES.find(c => c.city === name);
          return found ? [found.lat, found.lon] : null;
        }).filter(Boolean);
      });

      if (coords.length > 0) {
        map.fitBounds(coords, { padding: [80, 80], maxZoom: 7 });
      }
    }
  });

  routesList.appendChild(btn);
});

// ── Panel collapse toggle ───────────────────────────────────────────────────
document.getElementById('routes-toggle').addEventListener('click', () => {
  const list    = document.getElementById('routes-list');
  const chevron = document.querySelector('.routes-chevron');
  const open    = list.classList.toggle('is-collapsed');
  chevron.classList.toggle('is-collapsed', open);
  document.getElementById('routes-toggle').setAttribute('aria-expanded', String(!open));
});
