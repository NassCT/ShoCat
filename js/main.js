

function sendMessage() {
    var userInput = $("#user-input").val();

    if (userInput.trim() === "") return;

    $("#chat-messages").append("<div class='user-message animated fadeIn'>" + userInput + "</div>");

    // Ajax request to send the user message to the server
    $.ajax({
        type: "POST",
        url: "api.php",
        data: { message: userInput },
        success: function(response) {
            $("#chat-messages").append("<div class='bot-message animated slideInUp'>" + response + "</div>");
            // Scroll to the bottom of the chat messages
            $("#chat-messages").animate({ scrollTop: $('#chat-messages')[0].scrollHeight }, 500);
        }
    });

    $("#user-input").val("");
}

// Load initial messages with a fade-in animation
$(document).ready(function() {
    $("#chat-container").addClass("animated fadeIn");
    $.ajax({
        type: "GET",
        url: "api.php",
        success: function(response) {
            $("#chat-messages").html(response);
            // Scroll to the bottom of the chat messages
            $("#chat-messages").animate({ scrollTop: $('#chat-messages')[0].scrollHeight }, 500);
        }
    });
});
