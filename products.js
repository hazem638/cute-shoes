// ===== المنتجات: عدّلي الأسماء والأسعار والألوان والمقاسات هنا =====
const SIZES = ['37','38','39','40','41'];
const COLORS = {'بيج':'#e8d6a8','أسود':'#1f1f1f','عنابي':'#7a1f3d','بني':'#8b5a2b','رمادي':'#9a9590','أبيض':'#ffffff','وردي':'#f3b6c9','ذهبي':'#d9b25e'};

const PRODUCTS = [
  { id:'bow-heel', ar:'كعب الفيونكة', name:'Bow Heel', cat:'shoes', price:690, emoji:'👠', colors:['أسود','عنابي','بيج'], sizes:SIZES },
  { id:'pearl-flats', ar:'باليرينا اللؤلؤ', name:'Pearl Flats', cat:'shoes', price:459, emoji:'🥿', colors:['بيج','أسود'], sizes:SIZES },
  { id:'cloud-sneakers', ar:'سنيكرز السحابة', name:'Cloud Sneakers', cat:'shoes', price:820, emoji:'👟', colors:['أبيض','رمادي'], sizes:SIZES },
  { id:'cozy-boots', ar:'بوت دافي', name:'Cozy Boots', cat:'shoes', price:999, emoji:'👢', colors:['بني','أسود'], sizes:SIZES },
  { id:'mini-tote', ar:'شنطة إيد صغيرة', name:'Mini Tote', cat:'bags', price:750, emoji:'👜', colors:['بيج','أسود','عنابي'], sizes:null },
  { id:'crossbody', ar:'كروس بودي', name:'Crossbody', cat:'bags', price:580, emoji:'👛', colors:['رمادي','بني'], sizes:null },
  { id:'bow-clutch', ar:'كلاتش الفيونكة', name:'Bow Clutch', cat:'bags', price:420, emoji:'👝', colors:['ذهبي','وردي'], sizes:null }
];

PRODUCTS.forEach(p => { p.out = []; p.soldOut = false; });
// أسعار قبل الخصم (بتتشطب في الكارت). امسحي السطر ده لو مفيش خصم
const OLD = { 'cozy-boots': 1199 };
PRODUCTS.forEach(p => { p.old = OLD[p.id] || 0; });

// بيحط حالة المخزون اللي جاية من قاعدة البيانات على المنتجات
function applyStock(rows){
  PRODUCTS.forEach(p => { p.out = []; p.soldOut = false; });
  rows.forEach(r => {
    const p = PRODUCTS.find(x => x.id === r.product_id);
    if (p){ p.soldOut = !!r.sold_out; p.out = Array.isArray(r.out_sizes) ? r.out_sizes : []; }
  });
}
