
let dict = {};
const translations = {
  ru: { greeting: "Привет! Это MVP «Диетолог в кармане»", scan: "Сканировать продукт", cart: "Корзина", recipes: "Рецепты", ai: "AI-Анализ", register: "Регистрация" },
  ua: { greeting: "Привіт! Це MVP «Дієтолог у кишені»", scan: "Сканувати продукт", cart: "Кошик", recipes: "Рецепти", ai: "AI-Аналіз", register: "Реєстрація" },
  en: { greeting: "Hi! This is Pocket Dietitian MVP", scan: "Scan Product", cart: "Cart", recipes: "Recipes", ai: "AI Analysis", register: "Register" },
  fr: { greeting: "Bonjour! Voici le MVP «Diététicien de poche»", scan: "Scanner un produit", cart: "Panier", recipes: "Recettes", ai: "Analyse AI", register: "S'inscrire" },
  de: { greeting: "Hallo! Dies ist der MVP «Diätberater in der Tasche»", scan: "Produkt scannen", cart: "Warenkorb", recipes: "Rezepte", ai: "AI-Analyse", register: "Registrieren" },
  zh: { greeting: "你好！这是“口袋营养师”原型", scan: "扫描产品", cart: "购物车", recipes: "食谱", ai: "AI分析", register: "注册" },
  hy: { greeting: "Բարեւ! Սա «Գրպանային Դիետոլոգ» MVP-ն է", scan: "Սկանավորել ապրանքը", cart: "Զամբյուղ", recipes: "Բաղադրատոմսեր", ai: "AI Վերլուծություն", register: "Գրանցում" }
};

function loadLang(lang) {
  dict = translations[lang] || translations['en'];
  document.getElementById("greeting").innerText = dict.greeting;
  document.getElementById("scanBtn").innerText = dict.scan;
  document.getElementById("cartBtn").innerText = dict.cart;
  document.getElementById("recipesBtn").innerText = dict.recipes;
  document.getElementById("aiBtn").innerText = dict.ai;
  document.getElementById("registerBtn").innerText = dict.register;
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ru";
  document.getElementById("langSelect").value = lang;
  loadLang(lang);
});
