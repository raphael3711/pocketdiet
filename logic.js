
let translations = {
  "ru": { greeting: "Привет! Это MVP «Диетолог в кармане»", scan: "Сканировать", cart: "Корзина", recipe: "Рецепты", ai: "AI-Анализ", reg: "Регистрация" }, "uk": { greeting: "Привіт! Це MVP «Дієтолог у кишені»", scan: "Сканировать", cart: "Корзина", recipe: "Рецепты", ai: "AI-Анализ", reg: "Регистрация" }, "en": { greeting: "Hello! This is Pocket Dietitian MVP", scan: "Сканировать", cart: "Корзина", recipe: "Рецепты", ai: "AI-Анализ", reg: "Регистрация" }, "fr": { greeting: "Bonjour! MVP diététicien de poche", scan: "Сканировать", cart: "Корзина", recipe: "Рецепты", ai: "AI-Анализ", reg: "Регистрация" }, "de": { greeting: "Hallo! MVP Diätassistent", scan: "Сканировать", cart: "Корзина", recipe: "Рецепты", ai: "AI-Анализ", reg: "Регистрация" }, "zh": { greeting: "你好！这是口袋营养师", scan: "Сканировать", cart: "Корзина", recipe: "Рецепты", ai: "AI-Анализ", reg: "Регистрация" }, "hy": { greeting: "Բարև! Գրպանի դիետոլոգ", scan: "Сканировать", cart: "Корзина", recipe: "Рецепты", ai: "AI-Анализ", reg: "Регистрация" }
};

function setLang(lang) {
  const t = translations[lang];
  document.getElementById("greeting").innerText = t.greeting;
  document.getElementById("scanBtn").innerText = "📷 " + t.scan;
  document.getElementById("cartBtn").innerText = "🛒 " + t.cart;
  document.getElementById("recipeBtn").innerText = "📖 " + t.recipe;
  document.getElementById("aiBtn").innerText = "🧠 " + t.ai;
  document.getElementById("regBtn").innerText = "👤 " + t.reg;
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "ru";
  document.getElementById("language").value = lang;
  setLang(lang);
  loadDatabase();
});

let foodDB = [];

function loadDatabase() {
  fetch("db.json")
    .then(res => res.json())
    .then(data => { foodDB = data; });
}

function scanProduct() {
  alert("Запуск камеры для сканирования... (заглушка)");
}

function openCart() {
  document.getElementById("content").innerHTML = "<h3>Корзина пуста</h3>";
}

function showRecipes() {
  const rec = foodDB.slice(0, 3).map(f => `<li>${f.name} — ${f.calories} ккал</li>`).join("");
  document.getElementById("content").innerHTML = "<ul>" + rec + "</ul>";
}

function analyzeAI() {
  const summary = foodDB.map(f => `${f.name}: ${f.calories} ккал`).join("<br>");
  document.getElementById("content").innerHTML = "<p>Быстрый анализ:</p><p>" + summary + "</p>";
}

function openRegister() {
  document.getElementById("content").innerHTML = `
    <h3>Регистрация</h3>
    <input type='text' placeholder='Имя'><br>
    <input type='email' placeholder='Email'><br>
    <button onclick='alert("Регистрация отправлена!")'>Отправить</button>
  `;
}
