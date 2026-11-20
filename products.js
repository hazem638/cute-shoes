/* ===== الألوان (اسم اللون: الكود) ===== */
const COLORS = {
  'بيج': '#d8c3a5',
  'عسلي': '#b57a45',
  'بني': '#6b4128',
  'كريمي': '#f1e8d3',
  'أسود': '#1d1a19',
  'أزرق': '#4d6585',
  'عنابي': '#6e1f2a',
  'وردي': '#efdcd3',
  'أحمر': '#b3262e',
  'ذهبي': '#c9a85c',
  'فضي': '#c0c0c6'
};

/* ===== الأسعار: حطي السعر بالجنيه جنب كل موديل ===== */
const PRICE = {
  crossbody: 590, // كروس بودي
  tote: 0,      // Secret Bag
  heel: 740,    // صندل كعب
  belt: 0,      // Belt Tote
  backpack: 750, // Backpack
  quilted: 0,    // Quilted Bag
  slipon: 0      // Slip-On Flat
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
    ar: 'Secret Bag',
    name: 'Secret Bag',
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
    cat: 'heels',
    ar: 'صندل كعب',
    name: 'Slingback Heel',
    price: PRICE.heel,
    emoji: '👠',
    heel: true,
    sizes: [37, 38, 39, 40, 41],
    soldOut: false,
    out: [],
    colors: ['بيج', 'أسود', 'عنابي'],
    photos: {
      'بيج': 'heel-beige.jpg',
      'أسود': 'heel-black.jpg',
      'عنابي': 'heel-burgundy.jpg'
    }
  },
  {
    id: 'belt-tote',
    cat: 'bags',
    ar: 'Belt Tote',
    name: 'Belt Tote',
    price: PRICE.belt,
    emoji: '👜',
    soldOut: false,
    out: [],
    colors: ['بني', 'عنابي'],
    photos: {
      'بني': 'belt-tote-brown.jpg',
      'عنابي': 'belt-tote-burgundy.jpg'
    }
  },
  {
    id: 'backpack',
    cat: 'bags',
    ar: 'Backpack',
    name: 'Backpack',
    price: PRICE.backpack,
    emoji: '🎒',
    soldOut: false,
    out: [],
    colors: ['بيج', 'أسود', 'عسلي', 'أحمر'],
    photos: {
      'بيج': 'backpack-beige.jpg',
      'أسود': 'backpack-black.jpg',
      'عسلي': 'backpack-camel.jpg',
      'أحمر': 'backpack-red.jpg'
    }
  },
  {
    id: 'quilted',
    cat: 'bags',
    ar: 'Quilted Bag',
    name: 'Quilted Bag',
    price: PRICE.quilted,
    emoji: '👜',
    soldOut: false,
    out: [],
    colors: ['بني'],
    photos: {
      'بني': 'quilted-brown.jpg'
    }
  },
  {
    id: 'slipon',
    cat: 'shoes',
    ar: 'سليب أون',
    name: 'Slip-On Flat',
    price: PRICE.slipon,
    emoji: '🥿',
    sizes: [37, 38, 39, 40, 41],
    soldOut: false,
    out: [],
    colors: ['ذهبي', 'أسود', 'فضي'],
    photos: {
      'ذهبي': 'slipon-group.jpg',
      'أسود': 'slipon-group.jpg',
      'فضي': 'slipon-group.jpg'
    }
  }
];
