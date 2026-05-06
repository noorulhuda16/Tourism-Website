// ── IMAGE URLS (Unsplash free-to-use) ──
export const IMAGES = {
  hero: 'https://images.pexels.com/photos/35302563/pexels-photo-35302563.jpeg',
  intro: 'https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?auto=format&fit=crop&w=2000&q=80',
  village: 'https://images.unsplash.com/photo-1521892125404-76a993e24362?auto=format&fit=crop&w=2000&q=80',
  lake: 'https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?auto=format&fit=crop&w=2400&q=85',
  valley: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?auto=format&fit=crop&w=2400&q=85',
  cta: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?auto=format&fit=crop&w=2000&q=80',
}

// ── DESTINATIONS ──
export const DESTINATIONS = [
  {
    id: 'shangrila',
    tag: 'Lake · Serenity',
    name: 'Shangrila\nResort Lake',
    desc: "Pakistan's own slice of paradise — a sapphire lake framed by weeping willows and perfectly mirrored peaks. One of the most serene spots on Earth.",
    image: 'https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?auto=format&fit=crop&w=1200&q=80',
    span: 2, // grid row span
  },
  {
    id: 'deosai',
    tag: 'Plateau · Wildlife · 4350m',
    name: 'Deosai Plains',
    desc: "The world's second highest plateau — carpeted with wildflowers and home to the Himalayan brown bear.",
    image: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?auto=format&fit=crop&w=900&q=80',
    span: 1,
  },
  {
    id: 'kharpocho',
    tag: 'Heritage · 16th Century',
    name: 'Kharpocho Fort',
    desc: 'The ancient fortress commanding the Skardu valley — witness to centuries of Silk Road history.',
    image: 'https://images.unsplash.com/photo-1521892125404-76a993e24362?auto=format&fit=crop&w=900&q=80',
    span: 1,
  },
]

// ── EXPERIENCES ──
export const EXPERIENCES = [
  {
    id: 'trekking',
    num: '01',
    subtitle: 'K2 Base Camp Trek',
    name: 'High-Altitude\nTrekking',
    detail: 'The Concordia amphitheatre — where four 8,000m peaks surround you — is called the Throne Room of the Mountain Gods.',
    image: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?auto=format&fit=crop&w=680&h=480&q=80',
  },
  {
    id: 'lake',
    num: '02',
    subtitle: 'Kachura Lakes',
    name: 'Lake\nSerenity',
    detail: 'Kayak or simply sit at the edge of mirror-still waters that reflect the Karakoram range in perfect silence.',
    image: 'https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?auto=format&fit=crop&w=680&h=480&q=80',
  },
  {
    id: 'culture',
    num: '03',
    subtitle: 'Silk Road History',
    name: 'Ancient\nCulture',
    detail: 'Walk among petroglyphs carved 5,000 years ago, visit the 16th-century Kharpocho Fort, and witness Balti polo festivals.',
    image: 'https://images.unsplash.com/photo-1521892125404-76a993e24362?auto=format&fit=crop&w=680&h=480&q=80',
  },
  {
    id: 'stars',
    num: '04',
    subtitle: 'Katpana Desert',
    name: 'Milky Way\nStargazing',
    detail: 'At 2,400m with zero light pollution, the Milky Way stretches from horizon to horizon above the Karakoram peaks.',
    image: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?auto=format&fit=crop&w=680&h=480&q=80',
    filter: 'brightness(0.5) saturate(0.4)',
  },
  {
    id: 'wildlife',
    num: '05',
    subtitle: 'Deosai National Park',
    name: 'Wildlife\nSafari',
    detail: "Spot the endangered Himalayan brown bear roaming freely across the world's second-highest plateau at 4,350m.",
    image: 'https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?auto=format&fit=crop&w=680&h=480&q=80',
    filter: 'saturate(1.3) hue-rotate(20deg)',
  },
]

// ── SEASONS ──
export const SEASONS = [
  {
    id: 'spring',
    name: 'Spring',
    temp: 'April – June · 5°–22°C',
    note: 'Apricot blossoms blanket the valley in pink and white. Perfect trekking conditions as snow recedes.',
    image: 'https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?auto=format&fit=crop&w=600&h=420&q=75',
  },
  {
    id: 'summer',
    name: 'Summer',
    temp: 'July – Aug · 12°–30°C',
    note: 'Peak season — crystal skies, all routes open. The window for K2 Base Camp and Concordia.',
    image: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?auto=format&fit=crop&w=600&h=420&q=75',
  },
  {
    id: 'autumn',
    name: 'Autumn',
    temp: 'Sep – Oct · 0°–18°C',
    note: 'Golden poplars and apricot orchards ignite the valley in amber. The most photogenic season.',
    image: 'https://images.unsplash.com/photo-1521892125404-76a993e24362?auto=format&fit=crop&w=600&h=420&q=75',
    filter: 'saturate(1.3) sepia(0.2)',
  },
  {
    id: 'winter',
    name: 'Winter',
    temp: 'Nov – Mar · -15°–5°C',
    note: 'Deep snow transforms the valley into an ethereal frozen world — for the truly adventurous only.',
    image: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?auto=format&fit=crop&w=600&h=420&q=75',
    filter: 'brightness(0.65) saturate(0.3) contrast(1.1)',
  },
]

// ── STATS ──
export const STATS = [
  { number: '5×', label: '8000m+ Peaks Nearby' },
  { number: '2438m', label: 'Valley Elevation' },
  { number: '63km', label: 'Baltoro Glacier Length' },
  { number: '600+', label: 'Years of Balti Heritage' },
]

// ── PARALLAX BANDS ──
export const BANDS = [
  {
    id: 'k2',
    image: 'https://images.unsplash.com/photo-1679951124125-50cc4029d727?auto=format&fit=crop&w=2400&q=85',
    tag: 'Trek · Concordia · 5 Days',
    title: 'K2 Base\nCamp',
    desc: 'Trek to the base of the world\'s second highest peak through the legendary Baltoro Glacier — 63km of raw, primordial beauty that changes you forever.',
    align: 'left',
  },
  {
    id: 'mirrors',
    image: 'https://images.unsplash.com/photo-1602147557719-1d65f9e58a24?auto=format&fit=crop&w=2400&q=85',
    tag: 'Lower Kachura · Shangrila',
    title: 'Mirrors of\nParadise',
    desc: 'Still waters reflecting snow-capped peaks. The Shangrila resort lake — tranquility made visible, stillness made audible.',
    align: 'right',
  },
]

// ── NAV LINKS ──
export const NAV_LINKS = [
  { label: 'Discover', target: 'intro' },
  { label: 'Places', target: 'destinations' },
  { label: 'Experiences', target: 'experiences' },
  { label: 'Seasons', target: 'seasons' },
  { label: 'Plan', target: 'cta' },
]
