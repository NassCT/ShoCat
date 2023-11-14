// Fonction pour basculer entre les modes jour et nuit
function toggleMode() {
  $("body").toggleClass("night-mode");
  $("#moon-icon, #sun-icon").toggleClass("night-mode");

  // Ajouter ou supprimer la classe spécifique pour l'animation de bot-message en mode nuit
  $(".bot-message").toggleClass("bot-message-night", $("body").hasClass("night-mode"));

  // Sauvegarder le mode nuit dans le stockage local
  var nightMode = $("body").hasClass("night-mode") ? "enabled" : "disabled";
  localStorage.setItem("nightMode", nightMode);
}

// Gérer le clic sur le bouton de mode jour/nuit
$("#mode-toggle").click(function() {
  $("#sun-icon, #moon-icon").toggle();
  toggleMode();
});

// Appliquer le mode nuit lors du chargement de la page
$(document).ready(function() {
  var nightMode = localStorage.getItem("nightMode");
  if (nightMode === "enabled") {
    toggleMode();
  }
});
