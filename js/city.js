const params = new URLSearchParams(window.location.search);
const cityId  = params.get('id');
const city    = CITIES.find(c => getCityId(c.city) === cityId);

if (!city) {
  document.title = '찾을 수 없어요 — WalkNTalk';
  document.getElementById('hero').style.background = 'linear-gradient(135deg,#1a1a2e,#16213e)';
  document.getElementById('city-name').textContent  = '찾을 수 없어요';
  document.getElementById('city-meta').textContent  = '해당 도시의 데이터가 없습니다';
  document.getElementById('empty-state').classList.remove('hidden');
} else {
  const meta = REGION_META[city.region];
  const flag = COUNTRY_FLAGS[city.country] || '';

  // Page title
  document.title = `${city.city} — WalkNTalk`;

  // Hero gradient
  document.getElementById('hero').style.background =
    `linear-gradient(135deg, ${meta.gradient[0]}, ${meta.gradient[1]})`;

  // Icons (flag + region emoji)
  document.getElementById('hero-icons').textContent = `${flag} ${meta.emoji}`;

  // City name
  const cityKo = CITY_KO[city.city] || '';
  document.getElementById('city-name').innerHTML =
    city.city + (cityKo ? ` <span class="name-ko">${cityKo}</span>` : '');

  // Meta line
  const countryKo = COUNTRY_KO[city.country] || '';
  const countryStr = city.country + (countryKo ? ` (${countryKo})` : '');
  const yearPart = city.year ? ` · ${city.year}년` : '';
  document.getElementById('city-meta').textContent =
    `${countryStr} · ${meta.label}${yearPart}`;

  // Notes or empty state
  const hasNotes = city.notes && city.notes.trim().length > 0;
  if (hasNotes) {
    const notesSection = document.getElementById('notes-section');
    const notesBody    = document.getElementById('notes-body');

    city.notes.split('\n\n').filter(p => p.trim()).forEach(para => {
      const p = document.createElement('p');
      p.textContent = para.trim();
      notesBody.appendChild(p);
    });

    notesSection.classList.remove('hidden');
  } else {
    document.getElementById('empty-state').classList.remove('hidden');
  }
}
