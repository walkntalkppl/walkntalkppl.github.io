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

const CITY_KO = {
  'London': '런던', 'Glasgow': '글래스고', 'Paris': '파리', 'Amsterdam': '암스테르담', 'Berlin': '베를린',
  'Munich': '뮌헨', 'Vienna': '빈', 'Prague': '프라하', 'Český Krumlov': '체스키크룸로프',
  'Stockholm': '스톡홀름', 'Oslo': '오슬로', 'Copenhagen': '코펜하겐', 'Humlebaek': '훔레벡',
  'Helsingør': '헬싱외르', 'Zurich': '취리히', 'Milan': '밀라노', 'Rome': '로마',
  'Madrid': '마드리드', 'Barcelona': '바르셀로나', 'Lisbon': '리스본', 'Istanbul': '이스탄불',
  'Ankara': '앙카라', 'Bangkok': '방콕', 'Hanoi': '하노이', 'Tokyo': '도쿄', 'Osaka': '오사카',
  'Münster': '뮌스터', 'Hamburg': '함부르크', 'Porto': '포르투', 'Guimaraes': '기마랑이스',
  'Braga': '브라가', 'Coimbra': '코임브라', 'Nazare': '나자레', 'Cascais': '카스카이스',
  'Sintra': '신트라', 'Lagos': '라고스', 'Sagres': '사그레스', 'Portimao': '포르티마웅',
  'Albufeira': '알부페이라', 'Faro': '파루', 'Sevilla': '세비야', 'Ronda': '론다',
  'Malaga': '말라가', 'Nerja': '네르하', 'Granada': '그라나다', 'Murcia': '무르시아',
  'Cartagena': '카르타헤나', 'Valencia': '발렌시아', 'Bilbao': '빌바오', 'Nice': '니스',
  'Firenze': '피렌체', 'Venezia': '베네치아', 'Como': '코모', 'Bernareggio': '베르나레조',
  'Marseille': '마르세유', 'Lyon': '리옹', 'Ronchamp': '롱샹', 'Mulhouse': '뮐루즈',
  'La Tourette': '라 투레트', 'Aix-en-Provence': '엑상프로방스', 'Lausanne': '로잔',
  'Bern': '베른', 'Luzern': '루체른', 'Basel': '바젤', 'Lugano': '루가노',
  'Ticino': '티치노', 'Vals': '발스', 'Stuttgart': '슈투트가르트', 'Weil am Rhein': '바일암라인',
  'Frankfurt': '프랑크푸르트', 'Koln': '쾰른', 'Rotterdam': '로테르담', 'Den Haag': '덴하그',
  'Almere': '알메러', 'Delft': '델프트', 'Utrecht': '위트레흐트', 'Hilversum': '힐베르쉼',
  'Siem Reap': '시엠레아프', 'Luang Prabang': '루앙프라방', 'Ho Chi Minh City': '호찌민',
  'Da Nang': '다낭', 'Beijing': '베이징', 'Guangzhou': '광저우', 'Shanghai': '상하이',
  'Hong Kong': '홍콩', 'Kyoto': '교토', 'Takamatsu': '다카마쓰', 'Taipei': '타이베이',
  'Taitung': '타이둥', 'Seoul': '서울', 'Daegu': '대구', 'Busan': '부산', 'Gwangju': '광주',
  'Gangneung': '강릉', 'Sokcho': '속초', 'Donghae': '동해', 'Chuncheon': '춘천',
  'Mokpo': '목포', 'Suncheon': '순천', 'Yeosu': '여수', 'Tongyeong': '통영', 'Geoje': '거제',
  'Wando': '완도', 'Gwangyang': '광양', 'Cheonan': '천안', 'Pyeongtaek': '평택',
  'Suwon': '수원', 'Hwaseong': '화성', 'Incheon': '인천', 'Gyeongju': '경주',
  'Pohang': '포항', 'Daejeon': '대전', 'Hapcheon': '합천', 'Jinju': '진주',
  'Chungju': '충주', 'Jeonju': '전주', 'Gunsan': '군산', 'Iksan': '익산',
  'Ansan': '안산', 'Siheung': '시흥', 'Goseong': '고성', 'Yangyang': '양양',
  'Wonju': '원주', 'Ulsan': '울산', 'Miryang': '밀양', 'Changwon': '창원',
  'Gimhae': '김해', 'Jindo': '진도'
};

const COUNTRY_KO = {
  'United Kingdom': '영국', 'France': '프랑스', 'Netherlands': '네덜란드', 'Germany': '독일',
  'Austria': '오스트리아', 'Czech Republic': '체코', 'Poland': '폴란드', 'Sweden': '스웨덴',
  'Norway': '노르웨이', 'Denmark': '덴마크', 'Finland': '핀란드', 'Switzerland': '스위스',
  'Italy': '이탈리아', 'Spain': '스페인', 'Portugal': '포르투갈', 'Ireland': '아일랜드',
  'Greece': '그리스', 'Hungary': '헝가리', 'Romania': '루마니아', 'Serbia': '세르비아',
  'Croatia': '크로아티아', 'Ukraine': '우크라이나', 'Turkey': '튀르키예', 'Estonia': '에스토니아',
  'Lithuania': '리투아니아', 'Thailand': '태국', 'Singapore': '싱가포르', 'Indonesia': '인도네시아',
  'Malaysia': '말레이시아', 'Vietnam': '베트남', 'Japan': '일본', 'Cambodia': '캄보디아',
  'Laos': '라오스', 'China': '중국', 'Hong Kong': '홍콩', 'Taiwan': '대만',
  'South Korea': '대한민국'
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
  { city: "Glasgow", country: "United Kingdom", region: "europe", lat: 55.8642, lon: -4.2518, year: null, notes: "" },
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
  { city: "Tokyo", country: "Japan", region: "eastasia", lat: 35.6895, lon: 139.6917, year: null, notes: "" },
  { city: "Osaka", country: "Japan", region: "eastasia", lat: 34.6937, lon: 135.5023, year: null, notes: "" },
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
  { city: "Kyoto", country: "Japan", region: "eastasia", lat: 35.0116, lon: 135.7681, year: null, notes: "" },
  { city: "Takamatsu", country: "Japan", region: "eastasia", lat: 34.3401, lon: 134.0434, year: null, notes: "" },
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
  { city: "Jinju", country: "South Korea", region: "korea", lat: 35.1928, lon: 128.1086, year: null, notes: "" },
  { city: "Chungju", country: "South Korea", region: "korea", lat: 36.9910, lon: 127.9259, year: null, notes: "" },
  { city: "Jeonju", country: "South Korea", region: "korea", lat: 35.8242, lon: 127.1480, year: null, notes: "" },
  { city: "Gunsan", country: "South Korea", region: "korea", lat: 35.9677, lon: 126.7368, year: null, notes: "" },
  { city: "Iksan", country: "South Korea", region: "korea", lat: 35.9483, lon: 126.9576, year: null, notes: "" },
  { city: "Ansan", country: "South Korea", region: "korea", lat: 37.3219, lon: 126.8309, year: null, notes: "" },
  { city: "Siheung", country: "South Korea", region: "korea", lat: 37.3800, lon: 126.8029, year: null, notes: "" },
  { city: "Goseong", country: "South Korea", region: "korea", lat: 38.3806, lon: 128.4675, year: null, notes: "" },
  { city: "Yangyang", country: "South Korea", region: "korea", lat: 38.0754, lon: 128.6189, year: null, notes: "" },
  { city: "Wonju", country: "South Korea", region: "korea", lat: 37.3422, lon: 127.9201, year: null, notes: "" },
  { city: "Ulsan", country: "South Korea", region: "korea", lat: 35.5384, lon: 129.3114, year: null, notes: "" },
  { city: "Miryang", country: "South Korea", region: "korea", lat: 35.5038, lon: 128.7480, year: null, notes: "" },
  { city: "Changwon", country: "South Korea", region: "korea", lat: 35.2279, lon: 128.6811, year: null, notes: "" },
  { city: "Gimhae", country: "South Korea", region: "korea", lat: 35.2286, lon: 128.8890, year: null, notes: "" },
  { city: "Jindo", country: "South Korea", region: "korea", lat: 34.4873, lon: 126.2634, year: null, notes: "" }
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
                 'Bern', 'Lyon', 'La Tourette', 'Aix-en-Provence', 'Marseille'],
        transport: ['🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌',
                    '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌']
      },
      {
        color: '#f59e0b',
        cities: ['Marseille', 'Barcelona',
                 'Rome', 'Firenze', 'Milan'],
        transport: ['🚄', '✈️', '🚄', '🚄']
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
        cities: ['Milan', 'Venezia', 'Vienna', 'Prague'],
        transport: ['🚄', '🚄', '🚄']
      },
      {
        color: '#f59e0b',
        cities: ['Prague', 'Český Krumlov'],
        transport: ['🚄']
      },
      {
        color: '#f59e0b',
        cities: ['Prague', 'Berlin', 'Paris', 'Glasgow', 'London'],
        transport: ['🚄', '✈️', '✈️', '🚌']
      }
    ]
  },
  {
    id: 'europe-2017-sep',
    name: '10년만의 유럽',
    period: '2017. 9–10월',
    color: '#fb923c',
    segments: [
      {
        cities: ['Amsterdam', 'Münster', 'Hamburg', 'Copenhagen', 'Stockholm'],
        transport: ['🚌', '🚌', '✈️', '✈️']
      }
    ]
  },
  {
    id: 'iberia-2024-jun',
    name: '이베리아반도 여행',
    period: '2024. 6–8월',
    color: '#4ade80',
    segments: [
      { cities: ['Porto', 'Guimaraes'], transport: ['🚌'] },
      { cities: ['Porto', 'Braga', 'Coimbra', 'Nazare', 'Lisbon'], transport: ['🚌', '🚌', '🚌', '🚌'] },
      { cities: ['Lisbon', 'Sintra'], transport: ['🚄'] },
      { cities: ['Lisbon', 'Cascais'], transport: ['🚄'] },
      { cities: ['Lisbon', 'Lagos'], transport: ['🚌'] },
      { cities: ['Lagos', 'Sagres'], transport: ['🚌'] },
      {
        cities: ['Lagos', 'Portimao', 'Albufeira', 'Faro', 'Sevilla', 'Ronda',
                 'Malaga', 'Nerja', 'Granada', 'Murcia', 'Cartagena',
                 'Valencia', 'Madrid'],
        transport: ['🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚌', '🚄']
      },
      { cities: ['Madrid', 'Bilbao'], transport: ['🚌'] },
      { cities: ['Madrid', 'Barcelona', 'Nice'], transport: ['🚄', '✈️'] }
    ]
  },
  {
    id: 'europe-2025-apr',
    name: '메쉬커피10주년',
    period: '2025. 4월',
    color: '#60a5fa',
    segments: [
      { cities: ['Paris', 'Oslo', 'Copenhagen'], transport: ['✈️', '✈️'] },
      { cities: ['Copenhagen', 'Humlebaek', 'Helsingør'], transport: ['🚄', '🚄'] }
    ]
  }
];
