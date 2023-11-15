// Fonction pour basculer entre les modes jour et nuit
function toggleMode() {
  $("body").toggleClass("night-mode");
  $("#moon-icon, #sun-icon").toggleClass("night-mode");

  // Ajouter ou supprimer la classe spécifique pour l'animation de bot-message en mode nuit
  $(".bot-message").toggleClass("bot-message-night", $("body").hasClass("night-mode"));

  // Mettre à jour la variable globale et sauvegarder dans le stockage local
  nightModeEnabled = $("body").hasClass("night-mode");
  localStorage.setItem("nightMode", nightModeEnabled ? "enabled" : "disabled");
}

// Gérer le clic sur le bouton de mode jour/nuit
$(document).ready(function() {
  $("#mode-toggle").click(function() {
    $("#sun-icon, #moon-icon").toggle();
    toggleMode();
  });

  // Appliquer le mode nuit lors du chargement de la page
  var storedNightMode = localStorage.getItem("nightMode");
  nightModeEnabled = storedNightMode === "enabled";
  if (nightModeEnabled) {
    toggleMode();
  }
});
