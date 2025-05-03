
function startApp() {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  setLang(localStorage.getItem("lang") || "ru");
}

const translations = {
  ru: { greeting: "Привет!", scan: "Сканировать", cart: "Корзина", recipe: "Рецепты", ai: "AI-Анализ", reg: "Регистрация" },
  uk: { greeting: "Привіт!", scan: "Сканувати", cart: "Кошик", recipe: "Рецепти", ai: "AI-аналіз", reg: "Реєстрація" },
  en: { greeting: "Welcome!", scan: "Scan", cart: "Cart", recipe: "Recipes", ai: "AI Analysis", reg: "Register" },
  fr: { greeting: "Bienvenue!", scan: "Scanner", cart: "Panier", recipe: "Recettes", ai: "Analyse AI", reg: "Inscription" },
  de: { greeting: "Willkommen!", scan: "Scannen", cart: "Warenkorb", recipe: "Rezepte", ai: "AI-Analyse", reg: "Registrierung" },
  zh: { greeting: "欢迎!", scan: "扫描", cart: "购物车", recipe: "食谱", ai: "AI 分析", reg: "注册" },
  hy: { greeting: "Բարի գալուստ!", scan: "Սքանավորել", cart: "Զամբյուղ", recipe: "Բաղադրատոմսեր", ai: "AI Վերլուծություն", reg: "Գրանցում" }
};

function setLang(lang) {
  const t = translations[lang];
  document.getElementById("greeting").innerText = t.greeting;
  document.querySelectorAll("button")[1].innerText = "📷 " + t.scan;
  document.querySelectorAll("button")[2].innerText = "🛒 " + t.cart;
  document.querySelectorAll("button")[3].innerText = "📖 " + t.recipe;
  document.querySelectorAll("button")[4].innerText = "🧠 " + t.ai;
  document.querySelectorAll("button")[5].innerText = "👤 " + t.reg;
  localStorage.setItem("lang", lang);
}

function scanProduct() {
  document.getElementById("content").innerHTML = "<p>Сканирование запущено (заглушка)</p>";
}
function openCart() {
  document.getElementById("content").innerHTML = "<p>Корзина пуста</p>";
}
function showRecipes() {
  document.getElementById("content").innerHTML = "<ul><li>Салат из брокколи</li><li>Рис с авокадо</li><li>Яблочный смузи</li></ul>";
}
function analyzeAI() {
  document.getElementById("content").innerHTML = "<p>Идёт анализ... (заглушка)</p>";
}
function openRegister() {
  document.getElementById("content").innerHTML = "<p>Введите данные: <br><input placeholder='Имя'><br><input placeholder='Email'><br><button>Отправить</button></p>";
}
