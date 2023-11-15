<?php
include 'includes/db.php';

// Fonction pour obtenir une réponse adaptée à partir de la table answer_responses
function getAnswerResponse($userMessage) {
    global $conn;

    // Recherche d'une réponse correspondant au motif dans la table answer_responses
    $query = "SELECT response FROM answer_responses WHERE :userMessage LIKE CONCAT('%', pattern, '%') LIMIT 1";
    $stmt = $conn->prepare($query);
    $stmt->execute([':userMessage' => $userMessage]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    // Si une réponse est trouvée, la retourner
    if ($result && isset($result['response'])) {
        return $result['response'];
    }

    // Si aucune réponse n'est trouvée, retourner une réponse aléatoire de la table random_responses
    $queryRandom = "SELECT response FROM random_responses ORDER BY RAND() LIMIT 1";
    $stmtRandom = $conn->prepare($queryRandom);
    $stmtRandom->execute();
    $resultRandom = $stmtRandom->fetch(PDO::FETCH_ASSOC);

    // Si une réponse aléatoire est trouvée, la retourner
    if ($resultRandom && isset($resultRandom['response'])) {
        return $resultRandom['response'];
    }

    // Si aucune réponse n'est trouvée, retourner une réponse par défaut
    return "Je ne comprends pas bien. Pouvez-vous reformuler?";
}

// Exemple d'utilisation avec une réponse aléatoire si la question n'est pas adaptée
$botResponse = isset($_POST['userMessage']) ? getAnswerResponse($_POST['userMessage']) : "Je ne comprends pas bien. Pouvez-vous reformuler?";

echo $botResponse;

// Fermer la connexion à la base de données
$conn = null;
?>
