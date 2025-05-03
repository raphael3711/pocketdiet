
function scanProduct() {
    const video = document.getElementById('preview');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
                video.style.display = 'block';
                alert("Камера запущена. Добавим сканер в следующем этапе!");
            })
            .catch(function (err) {
                console.error("Ошибка доступа к камере:", err);
            });
    } else {
        alert("Ваш браузер не поддерживает доступ к камере");
    }
}

function openCart() {
    alert("Функция корзины в разработке");
}

function openLogin() {
    alert("Форма входа будет доступна в следующем обновлении");
}
