// ===== إعدادات المحل: الملف ده هو الوحيد اللي بتعدّليه عشان الموقع يتربط ببيانات المحل =====

// 1) رقم واتساب المحل اللي الطلبات هتتبعت عليه
//    الصيغة: 20 ثم الرقم من غير الصفر الأول (مثال: 01012345678 تبقى 201012345678)
const WA_NUMBER = '201008889013';

// 2) بيانات Supabase (من Project Settings > API في لوحة تحكم Supabase)
//    المفتاح ده "عام" وآمن للاستخدام في الموقع، بس ماتحطيش أبداً مفتاح service_role هنا
const SUPABASE_URL = 'https://nhzlloqolelwgwfxxkuw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_JudvqoG8_wPsnbeGcIAmdw_Ll5E6ua8';

// 3) طرق الدفع الإلكتروني: حطي بيانات المحل، ولو سيبتيها فاضية الخيار بيتخفي من الموقع
const INSTAPAY_ADDRESS = '01008889013';      // مثال: shopname@instapay
const VODAFONE_CASH_NUMBER = '01008889013';  // مثال: 01012345678
