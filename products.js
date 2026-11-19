/* ===== الألوان (اسم اللون: الكود) ===== */
const COLORS = {
  'بيج': '#d8c3a5',
  'عسلي': '#b57a45',
  'بني': '#6b4128',
  'كريمي': '#f1e8d3',
  'أسود': '#1d1a19',
  'أزرق': '#4d6585',
  'وردي': '#efdcd3'
};

/* ===== الأسعار: حطي السعر بالجنيه جنب كل موديل ===== */
const PRICE = {
  crossbody: 0, // كروس بودي
  tote: 0,      // توت مطبوعة
  heel: 0       // صندل كعب
};

/* ===== المنتجات: كل موديل مع ألوانه وصوره ===== */
const PRODUCTS = [
  {
    id: 'crossbody',
    cat: 'bags',
    ar: 'كروس بودي',
    name: 'Crossbody',
    price: PRICE.crossbody,
    emoji: '👜',
    soldOut: false,
    out: [],
    colors: ['بيج', 'عسلي', 'بني', 'كريمي', 'أسود'],
    photos: {
      'بيج': 'crossbody-beige.jpg',
      'عسلي': 'crossbody-tan.jpg',
      'بني': 'crossbody-brown.jpg',
      'كريمي': 'crossbody-cream.jpg',
      'أسود': 'crossbody-black.jpg'
    }
  },
  {
    id: 'tote',
    cat: 'bags',
    ar: 'توت مطبوعة',
    name: 'Printed Tote',
    price: PRICE.tote,
    emoji: '👜',
    soldOut: false,
    out: [],
    colors: ['أزرق', 'أسود', 'وردي'],
    photos: {
      'أزرق': 'tote-blue.jpg',
      'أسود': 'tote-black.jpg',
      'وردي': 'tote-pink.jpg'
    }
  },
  {
    id: 'heel',
    cat: 'shoes',
    ar: 'صندل كعب',
    name: 'Slingback Heel',
    price: PRICE.heel,
    emoji: '👠',
    sizes: [37, 38, 39, 40, 41],
    soldOut: false,
    out: [],
    colors: ['بيج', 'أسود'],
    photos: {
      'بيج': 'heel-beige.jpg',
      'أسود': 'heel-black.jpg'
    }
  }
];
