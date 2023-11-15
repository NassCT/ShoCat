// Fonction pour envoyer un message du bot
function sendBotMessage(message) {
    // Créer un élément de message du bot
    var botMessage = $("<div class='bot-message animated fadeIn'>" + message + "</div>");
  
    // Ajouter le message à la zone de messages
    $("#chat-messages").append(botMessage);
  
    // Faire défiler la zone de messages vers le bas pour afficher le nouveau message
    var chatMessages = document.getElementById("chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Fonction pour récupérer une réponse aléatoire depuis la base de données
  function getRandomResponse() {
    $.ajax({
      type: 'GET',
      url: 'getRandomResponse.php',
      success: function (data) {
        sendBotMessage(data);
      },
      error: function () {
        sendBotMessage("Je ne comprends pas bien. Pouvez-vous reformuler?");
      }
    });
  }
  
  // Fonction pour traiter la question de l'utilisateur et renvoyer une réponse du bot
  function processUserQuestion(userQuestion) {
    var lowerCaseQuestion = userQuestion.toLowerCase();
  
    if (lowerCaseQuestion.includes("hello") || lowerCaseQuestion.includes("hi")) {
      return "Salut !";
    } else if (lowerCaseQuestion.includes("how are you")) {
      return "Je vais bien, merci !";
    } else if (lowerCaseQuestion.includes("your name")) {
      return "Je suis Shobot, votre chatbot amical !";
    } else {
      // Appeler getRandomResponse en cas de question non reconnue
      getRandomResponse();
      return; // Ne pas envoyer de réponse immédiatement, car la réponse aléatoire sera envoyée par AJAX
    }
  }
  
  // Fonction pour envoyer un message de l'utilisateur
  function sendMessage() {
    var userMessage = $("#user-input").val();
  
    if (userMessage.trim() !== "") {
      $("#chat-messages").append("<div class='user-message'>" + userMessage + "</div>");
      $("#user-input").val("");
  
      // Traiter la question de l'utilisateur et envoyer une réponse du bot
      var botResponse = processUserQuestion(userMessage);
      if (botResponse) {
        sendBotMessage(botResponse);
      }
    }
  }

  
  // Gérer le clic sur le bouton "Envoyer"
  $("button").click(function () {
    sendMessage();
  });
  
  // Gérer la pression de la touche Entrée dans le champ de saisie de l'utilisateur
  $("#user-input").keypress(function (event) {
    if (event.which === 13) {
      sendMessage();
    }
  });
  
  // Envoyer un message du bot lors du chargement de la page (éviter cela si ce n'est pas nécessaire)
  // sendBotMessage("Thank you for your message!");
  