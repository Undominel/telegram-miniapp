git init
git add index.html
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ_ГИТХАБ_ЮЗЕРНЕЙМ/telegram-miniapp.git
git push -u origin main
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GermanBuddy</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            text-align: center;
            padding: 20px;
        }
        button {
            width: 100%;
            padding: 15px;
            margin: 5px 0;
            font-size: 16px;
            background: #ddd;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background: #bbb;
        }
    </style>
</head>
<body>
    <h2>📚 GermanBuddy Mini-App</h2>
    <button>🏆 Unlimited Access</button>
    <button>📚 Ändern Deutsch Level (A1-A2, B1, B2-C1)</button>
    <button>🎤 Ändern Stimme (Helga/Hans)</button>
    <button>📌 Wähle Themen zum Üben</button>
    <button>🏢 Zum Vorstellungsgespräch vorbereiten</button>
    <button>📄 Lebenslauf korrigieren</button>
    <button>✍️ Motivationsschreiben korrigieren</button>
    <button>💬 Einfach Thema wählen und reden üben</button>
    <button>ℹ️ Wie nutzt man GermanBuddy</button>

    <script>
        let tg = window.Telegram.WebApp;
        tg.expand(); // Разворачиваем Web App на весь экран
    </script>
</body>
</html>
