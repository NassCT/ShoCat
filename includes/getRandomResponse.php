<?php
include('includes/db.php');

// Sélectionner une réponse aléatoire depuis la base de données
$sql = "SELECT response FROM random_responses ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);

if ($result) {
    $row = $result->fetch_assoc();
    echo $row['response'];
} else {
    echo "Je ne comprends pas bien. Pouvez-vous reformuler?";
}

// Fermer la connexion à la base de données
$conn->close();
?>
