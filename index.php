<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/darkmode.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <title>Shobot IA</title>
</head>

<body>

    <div id="chat-container">
        <div id="mode-toggle-container">
            <button id="mode-toggle" onclick="toggleMode()">
                <img id="moon-icon" src="img/moon.svg" alt="Moon Icon">
                <img id="sun-icon" src="img/sun.svg" alt="Sun Icon">
            </button>
        </div>

        <div id="chat-messages"></div>
        <input type="text" id="user-input" placeholder="Type your message...">
        <button onclick="sendMessage()">Send</button>
    </div>

    <script src="js/main.js"></script>
    <script src="js/darkmode.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
</body>

</html>