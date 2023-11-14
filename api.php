<?php
include("includes/db.php");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle user message
    $userMessage = $_POST['message'];

    // Save user message to the database
    $sql = "INSERT INTO messages (content, is_user) VALUES ('$userMessage', 1)";
    $conn->query($sql);

    // Add your logic to generate a bot response based on the user's message
    $botResponse = "Bot: Thank you for your message!";

    // Save bot response to the database
    $sql = "INSERT INTO messages (content, is_user) VALUES ('$botResponse', 0)";
    $conn->query($sql);

    echo $botResponse;
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Load chat history from the database
    $result = $conn->query("SELECT * FROM messages ORDER BY created_at DESC");
    $messages = "";

    while ($row = $result->fetch_assoc()) {
        $class = $row['is_user'] ? "user-message" : "bot-message";
        $messages .= "<div class='$class'>" . $row['content'] . "</div>";
    }

    echo $messages;
}

$conn->close();
?>
