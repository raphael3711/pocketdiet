
function startScan() {
  const video = document.getElementById('camera');
  video.hidden = false;
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => { video.srcObject = stream; })
    .catch(err => { alert("Ошибка доступа к камере: " + err); });
}
function openCart() { document.getElementById('output').innerText = dict.cart; }
function showRecipes() { document.getElementById('output').innerText = dict.recipes; }
function runAIAnalysis() { document.getElementById('output').innerText = dict.ai; }
function registerUser() { document.getElementById('output').innerText = dict.register; }

function changeLang(lang) {
  localStorage.setItem('lang', lang);
  loadLang(lang);
}
