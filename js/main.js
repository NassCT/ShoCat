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
  
  // Fonction pour envoyer un message de l'utilisateur
  function sendMessage() {
    // Récupérer le message de l'utilisateur
    var userMessage = $("#user-input").val();
  
    // Vérifier si le message de l'utilisateur n'est pas vide
    if (userMessage.trim() !== "") {
      // Ajouter le message de l'utilisateur à la zone de messages
      $("#chat-messages").append("<div class='user-message'>" + userMessage + "</div>");
  
      // Effacer le champ de saisie de l'utilisateur
      $("#user-input").val("");
  
      // Envoyer un message du bot en réponse
      sendBotMessage("Thank you for your message!");
    }
  }
  
  // Gérer le clic sur le bouton "Envoyer"
  $("button").click(function() {
    sendMessage();
  });
  
  // Gérer la pression de la touche Entrée dans le champ de saisie de l'utilisateur
  $("#user-input").keypress(function(event) {
    if (event.which === 13) {
      sendMessage();
    }
  });
  
  // Envoyer un message du bot lors du chargement de la page (éviter cela si ce n'est pas nécessaire)
  // sendBotMessage("Thank you for your message!");
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
  
  // Fonction pour traiter la question de l'utilisateur et renvoyer une réponse du bot
  function processUserQuestion(userQuestion) {
    // Convertir la question de l'utilisateur en minuscules pour une correspondance insensible à la casse
    var lowerCaseQuestion = userQuestion.toLowerCase();
  
    // Vérifier des motifs de questions spécifiques avec des expressions régulières
    if (lowerCaseQuestion.includes("hello") || lowerCaseQuestion.includes("hi")) {
      return "Hi there!";
    } else if (lowerCaseQuestion.includes("how are you")) {
      return "I'm doing well, thank you!";
    } else if (lowerCaseQuestion.includes("your name")) {
      return "I'm Shobot, your friendly chatbot!";
    } else {
      // Répondre par défaut si aucune correspondance spécifique n'est trouvée
      return "Thank you for your message!";
    }
  }
  
  // Fonction pour envoyer un message de l'utilisateur
  function sendMessage() {
    // Récupérer le message de l'utilisateur
    var userMessage = $("#user-input").val();
  
    // Vérifier si le message de l'utilisateur n'est pas vide
    if (userMessage.trim() !== "") {
      // Ajouter le message de l'utilisateur à la zone de messages
      $("#chat-messages").append("<div class='user-message'>" + userMessage + "</div>");
  
      // Effacer le champ de saisie de l'utilisateur
      $("#user-input").val("");
  
      // Traiter la question de l'utilisateur et envoyer une réponse du bot
      var botResponse = processUserQuestion(userMessage);
      sendBotMessage(botResponse);
    }
  }
  
  // Gérer le clic sur le bouton "Envoyer"
  $("button").click(function() {
    sendMessage();
  });
  
  // Gérer la pression de la touche Entrée dans le champ de saisie de l'utilisateur
  $("#user-input").keypress(function(event) {
    if (event.which === 13) {
      sendMessage();
    }
  });
  
  // Envoyer un message du bot lors du chargement de la page (éviter cela si ce n'est pas nécessaire)
  // sendBotMessage("Thank you for your message!");
  