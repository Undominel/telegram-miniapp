// Подключение Telegram WebApp API
let tg = window.Telegram.WebApp;
tg.expand(); // Делаем мини-апп на весь экран

// Проверяем, загружен ли Telegram Web App
tg.ready();
console.log("GermanBuddy Mini App gestartet!");
