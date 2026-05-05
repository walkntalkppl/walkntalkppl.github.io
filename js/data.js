const REGION_META = {
  europe: {
    label: '유럽',
    emoji: '🏰',
    gradient: ['#667eea', '#764ba2'],
    markerColor: '#9b8fff'
  },
  sea: {
    label: '동남아',
    emoji: '🌴',
    gradient: ['#11998e', '#38ef7d'],
    markerColor: '#38ef7d'
  },
  japan: {
    label: '일본',
    emoji: '⛩️',
    gradient: ['#ff9a9e', '#fad0c4'],
    markerColor: '#ff9a9e'
  },
  eastasia: {
    label: '동아시아',
    emoji: '🏯',
    gradient: ['#f59e0b', '#fcd34d'],
    markerColor: '#fbbf24'
  },
  korea: {
    label: '한국',
    emoji: '🇰🇷',
    gradient: ['#e11d48', '#fb7185'],
    markerColor: '#f43f5e'
  }
};

const COUNTRY_FLAGS = {
  'United Kingdom': '🇬🇧',
  'France': '🇫🇷',
  'Netherlands': '🇳🇱',
  'Germany': '🇩🇪',
  'Austria': '🇦🇹',
  'Czech Republic': '🇨🇿',
  'Poland': '🇵🇱',
  'Sweden': '🇸🇪',
  'Norway': '🇳🇴',
  'Denmark': '🇩🇰',
  'Finland': '🇫🇮',
  'Switzerland': '🇨🇭',
  'Italy': '🇮🇹',
  'Spain': '🇪🇸',
  'Portugal': '🇵🇹',
  'Ireland': '🇮🇪',
  'Greece': '🇬🇷',
  'Hungary': '🇭🇺',
  'Romania': '🇷🇴',
  'Serbia': '🇷🇸',
  'Croatia': '🇭🇷',
  'Ukraine': '🇺🇦',
  'Turkey': '🇹🇷',
  'Estonia': '🇪🇪',
  'Lithuania': '🇱🇹',
  'Thailand': '🇹🇭',
  'Singapore': '🇸🇬',
  'Indonesia': '🇮🇩',
  'Malaysia': '🇲🇾',
  'Vietnam': '🇻🇳',
  'Japan': '🇯🇵',
  'Cambodia': '🇰🇭',
  'Laos': '🇱🇦',
  'China': '🇨🇳',
  'Hong Kong': '🇭🇰',
  'Taiwan': '🇹🇼',
  'South Korea': '🇰🇷'
};

function getCityId(cityName) {
  return cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// 도시를 추가하려면 아래 목록에 새 항목을 추가하세요.
// year: 방문 연도 (숫자, 모르면 null)
// notes: 여행 기록 (문자열, 없으면 "" — 문단 구분은 \n\n)
const CITIES = [
  { city: "London", country: "United Kingdom", region: "europe", lat: 51.5072, lon: -0.1276, year: null, notes: "" },
  { city: "Paris", country: "France", region: "europe", lat: 48.8566, lon: 2.3522, year: null, notes: "" },
  { city: "Amsterdam", country: "Netherlands", region: "europe", lat: 52.3676, lon: 4.9041, year: null, notes: "" },
  { city: "Berlin", country: "Germany", region: "europe", lat: 52.52, lon: 13.405, year: null, notes: "" },
  { city: "Munich", country: "Germany", region: "europe", lat: 48.1351, lon: 11.582, year: null, notes: "" },
  { city: "Vienna", country: "Austria", region: "europe", lat: 48.2082, lon: 16.3738, year: null, notes: "" },
  { city: "Prague", country: "Czech Republic", region: "europe", lat: 50.0755, lon: 14.4378, year: null, notes: "" },
  { city: "Český Krumlov", country: "Czech Republic", region: "europe", lat: 48.8127, lon: 14.3175, year: null, notes: "" },
  { city: "Stockholm", country: "Sweden", region: "europe", lat: 59.3293, lon: 18.0686, year: null, notes: "" },
  { city: "Oslo", country: "Norway", region: "europe", lat: 59.9139, lon: 10.7522, year: null, notes: "" },
  { city: "Copenhagen", country: "Denmark", region: "europe", lat: 55.6761, lon: 12.5683, year: null, notes: "" },
  { city: "Humlebaek", country: "Denmark", region: "europe", lat: 55.9614, lon: 12.5342, year: null, notes: "" },
  { city: "Helsingør", country: "Denmark", region: "europe", lat: 56.0365, lon: 12.6136, year: null, notes: "" },
  { city: "Zurich", country: "Switzerland", region: "europe", lat: 47.3769, lon: 8.5417, year: null, notes: "" },
  { city: "Milan", country: "Italy", region: "europe", lat: 45.4642, lon: 9.19, year: null, notes: "" },
  { city: "Rome", country: "Italy", region: "europe", lat: 41.9028, lon: 12.4964, year: null, notes: "" },
  { city: "Madrid", country: "Spain", region: "europe", lat: 40.4168, lon: -3.7038, year: null, notes: "" },
  { city: "Barcelona", country: "Spain", region: "europe", lat: 41.3851, lon: 2.1734, year: null, notes: "" },
  { city: "Lisbon", country: "Portugal", region: "europe", lat: 38.7223, lon: -9.1393, year: null, notes: "" },
  { city: "Istanbul", country: "Turkey", region: "europe", lat: 41.0082, lon: 28.9784, year: null, notes: "" },
  { city: "Ankara", country: "Turkey", region: "europe", lat: 39.9334, lon: 32.8597, year: null, notes: "" },
  { city: "Bangkok", country: "Thailand", region: "sea", lat: 13.7563, lon: 100.5018, year: null, notes: "" },
  { city: "Hanoi", country: "Vietnam", region: "sea", lat: 21.0278, lon: 105.8342, year: null, notes: "" },
  { city: "Tokyo", country: "Japan", region: "japan", lat: 35.6895, lon: 139.6917, year: null, notes: "" },
  { city: "Osaka", country: "Japan", region: "japan", lat: 34.6937, lon: 135.5023, year: null, notes: "" },
  { city: "Münster", country: "Germany", region: "europe", lat: 51.9607, lon: 7.6261, year: null, notes: "" },
  { city: "Hamburg", country: "Germany", region: "europe", lat: 53.5753, lon: 10.0153, year: null, notes: "" },
  { city: "Porto", country: "Portugal", region: "europe", lat: 41.1579, lon: -8.6291, year: null, notes: "" },
  { city: "Guimaraes", country: "Portugal", region: "europe", lat: 41.4439, lon: -8.2881, year: null, notes: "" },
  { city: "Braga", country: "Portugal", region: "europe", lat: 41.5454, lon: -8.4265, year: null, notes: "" },
  { city: "Coimbra", country: "Portugal", region: "europe", lat: 40.2033, lon: -8.4103, year: null, notes: "" },
  { city: "Nazare", country: "Portugal", region: "europe", lat: 39.6042, lon: -9.0706, year: null, notes: "" },
  { city: "Cascais", country: "Portugal", region: "europe", lat: 38.6966, lon: -9.4219, year: null, notes: "" },
  { city: "Sintra", country: "Portugal", region: "europe", lat: 38.8029, lon: -9.3817, year: null, notes: "" },
  { city: "Lagos", country: "Portugal", region: "europe", lat: 37.0993, lon: -8.6736, year: null, notes: "" },
  { city: "Sagres", country: "Portugal", region: "europe", lat: 36.9998, lon: -8.9426, year: null, notes: "" },
  { city: "Portimao", country: "Portugal", region: "europe", lat: 37.1357, lon: -8.5379, year: null, notes: "" },
  { city: "Albufeira", country: "Portugal", region: "europe", lat: 37.0892, lon: -8.2503, year: null, notes: "" },
  { city: "Faro", country: "Portugal", region: "europe", lat: 37.0194, lon: -7.9322, year: null, notes: "" },
  { city: "Sevilla", country: "Spain", region: "europe", lat: 37.3891, lon: -5.9845, year: null, notes: "" },
  { city: "Ronda", country: "Spain", region: "europe", lat: 36.7472, lon: -5.1622, year: null, notes: "" },
  { city: "Malaga", country: "Spain", region: "europe", lat: 36.7213, lon: -4.4214, year: null, notes: "" },
  { city: "Nerja", country: "Spain", region: "europe", lat: 36.7469, lon: -3.8713, year: null, notes: "" },
  { city: "Granada", country: "Spain", region: "europe", lat: 37.1773, lon: -3.5986, year: null, notes: "" },
  { city: "Murcia", country: "Spain", region: "europe", lat: 37.9922, lon: -1.1307, year: null, notes: "" },
  { city: "Cartagena", country: "Spain", region: "europe", lat: 37.6063, lon: -0.9869, year: null, notes: "" },
  { city: "Valencia", country: "Spain", region: "europe", lat: 39.4699, lon: -0.3763, year: null, notes: "" },
  { city: "Bilbao", country: "Spain", region: "europe", lat: 43.2630, lon: -2.9350, year: null, notes: "" },
  { city: "Nice", country: "France", region: "europe", lat: 43.7102, lon: 7.2620, year: null, notes: "" },
  { city: "Firenze", country: "Italy", region: "europe", lat: 43.7696, lon: 11.2558, year: null, notes: "" },
  { city: "Venezia", country: "Italy", region: "europe", lat: 45.4408, lon: 12.3155, year: null, notes: "" },
  { city: "Como", country: "Italy", region: "europe", lat: 45.8081, lon: 9.0852, year: null, notes: "" },
  { city: "Bernareggio", country: "Italy", region: "europe", lat: 45.6844, lon: 9.3511, year: null, notes: "" },
  { city: "Marseille", country: "France", region: "europe", lat: 43.2965, lon: 5.3698, year: null, notes: "" },
  { city: "Lyon", country: "France", region: "europe", lat: 45.7640, lon: 4.8357, year: null, notes: "" },
  { city: "Ronchamp", country: "France", region: "europe", lat: 47.7063, lon: 6.6264, year: null, notes: "" },
  { city: "Mulhouse", country: "France", region: "europe", lat: 47.7508, lon: 7.3359, year: null, notes: "" },
  { city: "La Tourette", country: "France", region: "europe", lat: 45.8339, lon: 4.5694, year: null, notes: "" },
  { city: "Aix-en-Provence", country: "France", region: "europe", lat: 43.5297, lon: 5.4474, year: null, notes: "" },
  { city: "Lausanne", country: "Switzerland", region: "europe", lat: 46.5197, lon: 6.6323, year: null, notes: "" },
  { city: "Bern", country: "Switzerland", region: "europe", lat: 46.9480, lon: 7.4474, year: null, notes: "" },
  { city: "Luzern", country: "Switzerland", region: "europe", lat: 47.0502, lon: 8.3093, year: null, notes: "" },
  { city: "Basel", country: "Switzerland", region: "europe", lat: 47.5596, lon: 7.5886, year: null, notes: "" },
  { city: "Lugano", country: "Switzerland", region: "europe", lat: 46.0037, lon: 8.9511, year: null, notes: "" },
  { city: "Ticino", country: "Switzerland", region: "europe", lat: 46.1952, lon: 9.0202, year: null, notes: "" },
  { city: "Vals", country: "Switzerland", region: "europe", lat: 46.6236, lon: 9.1825, year: null, notes: "" },
  { city: "Stuttgart", country: "Germany", region: "europe", lat: 48.7758, lon: 9.1829, year: null, notes: "" },
  { city: "Weil am Rhein", country: "Germany", region: "europe", lat: 47.5960, lon: 7.6202, year: null, notes: "" },
  { city: "Frankfurt", country: "Germany", region: "europe", lat: 50.1109, lon: 8.6821, year: null, notes: "" },
  { city: "Koln", country: "Germany", region: "europe", lat: 50.9333, lon: 6.9500, year: null, notes: "" },
  { city: "Rotterdam", country: "Netherlands", region: "europe", lat: 51.9225, lon: 4.4792, year: null, notes: "" },
  { city: "Den Haag", country: "Netherlands", region: "europe", lat: 52.0705, lon: 4.3007, year: null, notes: "" },
  { city: "Almere", country: "Netherlands", region: "europe", lat: 52.3508, lon: 5.2647, year: null, notes: "" },
  { city: "Delft", country: "Netherlands", region: "europe", lat: 52.0116, lon: 4.3571, year: null, notes: "" },
  { city: "Utrecht", country: "Netherlands", region: "europe", lat: 52.0907, lon: 5.1214, year: null, notes: "" },
  { city: "Hilversum", country: "Netherlands", region: "europe", lat: 52.2292, lon: 5.1679, year: null, notes: "" },
  { city: "Siem Reap", country: "Cambodia", region: "sea", lat: 13.3633, lon: 103.8564, year: null, notes: "" },
  { city: "Luang Prabang", country: "Laos", region: "sea", lat: 19.8845, lon: 102.1348, year: null, notes: "" },
  { city: "Ho Chi Minh City", country: "Vietnam", region: "sea", lat: 10.8231, lon: 106.6297, year: null, notes: "" },
  { city: "Da Nang", country: "Vietnam", region: "sea", lat: 16.0544, lon: 108.2022, year: null, notes: "" },
  { city: "Beijing", country: "China", region: "eastasia", lat: 39.9042, lon: 116.4074, year: null, notes: "" },
  { city: "Guangzhou", country: "China", region: "eastasia", lat: 23.1291, lon: 113.2644, year: null, notes: "" },
  { city: "Shanghai", country: "China", region: "eastasia", lat: 31.2304, lon: 121.4737, year: null, notes: "" },
  { city: "Hong Kong", country: "Hong Kong", region: "eastasia", lat: 22.3193, lon: 114.1694, year: null, notes: "" },
  { city: "Kyoto", country: "Japan", region: "japan", lat: 35.0116, lon: 135.7681, year: null, notes: "" },
  { city: "Takamatsu", country: "Japan", region: "japan", lat: 34.3401, lon: 134.0434, year: null, notes: "" },
  { city: "Taipei", country: "Taiwan", region: "eastasia", lat: 25.0330, lon: 121.5654, year: null, notes: "" },
  { city: "Taitung", country: "Taiwan", region: "eastasia", lat: 22.7583, lon: 121.1444, year: null, notes: "" },
  { city: "Seoul", country: "South Korea", region: "korea", lat: 37.5665, lon: 126.9780, year: null, notes: "" },
  { city: "Daegu", country: "South Korea", region: "korea", lat: 35.8714, lon: 128.6014, year: null, notes: "" },
  { city: "Busan", country: "South Korea", region: "korea", lat: 35.1796, lon: 129.0756, year: null, notes: "" },
  { city: "Gwangju", country: "South Korea", region: "korea", lat: 35.1595, lon: 126.8526, year: null, notes: "" },
  { city: "Gangneung", country: "South Korea", region: "korea", lat: 37.7519, lon: 128.8761, year: null, notes: "" },
  { city: "Sokcho", country: "South Korea", region: "korea", lat: 38.2070, lon: 128.5918, year: null, notes: "" },
  { city: "Donghae", country: "South Korea", region: "korea", lat: 37.5244, lon: 129.1142, year: null, notes: "" },
  { city: "Chuncheon", country: "South Korea", region: "korea", lat: 37.8813, lon: 127.7298, year: null, notes: "" },
  { city: "Mokpo", country: "South Korea", region: "korea", lat: 34.8118, lon: 126.3922, year: null, notes: "" },
  { city: "Suncheon", country: "South Korea", region: "korea", lat: 34.9506, lon: 127.4874, year: null, notes: "" },
  { city: "Yeosu", country: "South Korea", region: "korea", lat: 34.7604, lon: 127.6622, year: null, notes: "" },
  { city: "Tongyeong", country: "South Korea", region: "korea", lat: 34.8544, lon: 128.4333, year: null, notes: "" },
  { city: "Geoje", country: "South Korea", region: "korea", lat: 34.8800, lon: 128.6211, year: null, notes: "" },
  { city: "Wando", country: "South Korea", region: "korea", lat: 34.3114, lon: 126.7544, year: null, notes: "" },
  { city: "Gwangyang", country: "South Korea", region: "korea", lat: 34.9407, lon: 127.6958, year: null, notes: "" },
  { city: "Cheonan", country: "South Korea", region: "korea", lat: 36.8151, lon: 127.1139, year: null, notes: "" },
  { city: "Pyeongtaek", country: "South Korea", region: "korea", lat: 36.9921, lon: 127.1129, year: null, notes: "" },
  { city: "Suwon", country: "South Korea", region: "korea", lat: 37.2636, lon: 127.0286, year: null, notes: "" },
  { city: "Hwaseong", country: "South Korea", region: "korea", lat: 37.1999, lon: 126.8317, year: null, notes: "" },
  { city: "Incheon", country: "South Korea", region: "korea", lat: 37.4563, lon: 126.7052, year: null, notes: "" },
  { city: "Gyeongju", country: "South Korea", region: "korea", lat: 35.8562, lon: 129.2247, year: null, notes: "" },
  { city: "Pohang", country: "South Korea", region: "korea", lat: 36.0190, lon: 129.3435, year: null, notes: "" },
  { city: "Daejeon", country: "South Korea", region: "korea", lat: 36.3504, lon: 127.3845, year: null, notes: "" },
  { city: "Hapcheon", country: "South Korea", region: "korea", lat: 35.5664, lon: 128.1659, year: null, notes: "" },
  { city: "Jinju", country: "South Korea", region: "korea", lat: 35.1928, lon: 128.1086, year: null, notes: "" }
];

// 여행 루트 데이터
// cityNames: 방문한 순서대로 도시 이름을 나열하세요 (CITIES에 있는 city 값과 동일해야 합니다)
// segments: 선을 분리하고 싶을 때 배열을 나누세요.
// 분기 없는 단순 루트는 segments 안에 배열을 하나만 넣으면 됩니다.
const ROUTES = [
  {
    id: 'archi-2008-jan',
    name: '아누21 건축여행',
    period: '2008. 1–2월',
    color: '#fde047',
    segments: [
      {
        color: '#fde047',
        cities: ['Amsterdam', 'Almere', 'Rotterdam', 'Delft', 'Den Haag', 'Utrecht', 'Hilversum',
                 'Koln', 'Frankfurt', 'Stuttgart', 'Ronchamp', 'Mulhouse',
                 'Basel', 'Weil am Rhein', 'Bern', 'Luzern', 'Zurich', 'Ticino', 'Lugano', 'Vals',
                 'Bern', 'Lyon', 'La Tourette', 'Aix-en-Provence', 'Marseille']
      },
      {
        color: '#f59e0b',
        cities: ['Marseille', 'Barcelona',
                 'Rome', 'Firenze', 'Milan', 'Venezia',
                 'Vienna', 'Prague', 'Berlin', 'Paris', 'London']
      },
      {
        color: '#f59e0b',
        cities: ['Milan', 'Como']
      },
      {
        color: '#f59e0b',
        cities: ['Milan', 'Bernareggio']
      },
      {
        color: '#f59e0b',
        cities: ['Prague', 'Český Krumlov']
      }
    ]
  },
  {
    id: 'europe-2017-sep',
    name: '10년만의 유럽',
    period: '2017. 9–10월',
    color: '#fb923c',
    segments: [
      ['Amsterdam', 'Münster', 'Hamburg', 'Copenhagen', 'Stockholm']
    ]
  },
  {
    id: 'iberia-2024-jun',
    name: '이베리아반도 여행',
    period: '2024. 6–8월',
    color: '#4ade80',
    segments: [
      ['Porto', 'Guimaraes'],
      ['Porto', 'Braga', 'Coimbra', 'Nazare',
       'Lisbon', 'Lagos', 'Portimao', 'Albufeira', 'Faro', 'Sevilla', 'Ronda',
       'Malaga', 'Nerja', 'Granada', 'Murcia', 'Cartagena',
       'Valencia', 'Madrid'],
      ['Lisbon', 'Cascais'],
      ['Lisbon', 'Sintra'],
      ['Lagos', 'Sagres'],
      ['Madrid', 'Bilbao'],
      ['Madrid', 'Barcelona', 'Nice']
    ]
  },
  {
    id: 'europe-2025-apr',
    name: '메쉬커피10주년',
    period: '2025. 4월',
    color: '#60a5fa',
    segments: [
      ['Paris', 'Oslo', 'Copenhagen'],
      ['Copenhagen', 'Humlebaek', 'Helsingør']
    ]
  }
];
