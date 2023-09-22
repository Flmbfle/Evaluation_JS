let moins20 = 0;
let entre20et40 = 0;
let plus40 = 0;

function comptage() {
    while (true) {
        // Récupérer la valeur de l'âge depuis le champ d'entrée
        let ageInput = document.getElementById("ageInput").value;

        if (ageInput === "") {
            break; // Si le champ est vide, terminer la saisie
        }

        let age = parseInt(ageInput);

        if (isNaN(age)) {
            // Gérer le cas où l'utilisateur a entré une valeur non numérique
            alert("Veuillez entrer un âge valide.");
            // Vous pouvez également effacer le contenu du champ d'entrée ici si nécessaire
            break;
        }

        if (age >= 100) {
            plus40++; // Compter les centenaires
            // Cacher le bouton en cas d'âge >= 100
            document.getElementById("calculButton").style.display = "none";
        } else if (age > 0 && age < 20) {
            moins20++;
        } else if (age >= 20 && age <= 40) {
            entre20et40++;
        } else if (age > 40 && age < 100) {
            plus40++;
        } else {

        }

        // Afficher l'âge saisi (vous pouvez le faire ici ou ailleurs dans votre code)
        console.log("Âge saisi : " + age);

        // Effacer le contenu du champ d'entrée après chaque saisie
        document.getElementById("ageInput").value = "";
    }

    // Mettre à jour le contenu des éléments HTML avec les résultats
    document.getElementById("moins20").textContent = moins20;
    document.getElementById("entre20et40").textContent = entre20et40;
    document.getElementById("plus40").textContent = plus40;

    // Afficher les résultats
    document.getElementById("results").style.display = "block";
}

// Sélectionnez le bouton de calcul par son ID
const calculButton = document.getElementById("calculButton");

// Sélectionnez le bouton de réinitialisation par son ID
const resetButton = document.getElementById("resetButton");

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton de calcul
calculButton.addEventListener("click", comptage);

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton de réinitialisation
resetButton.addEventListener("click", function() {
    // Réinitialisez les compteurs à zéro
    moins20 = 0;
    entre20et40 = 0;
    plus40 = 0;

    // Réinitialisez les éléments HTML pour afficher les résultats
    document.getElementById("moins20").textContent = moins20;
    document.getElementById("entre20et40").textContent = entre20et40;
    document.getElementById("plus40").textContent = plus40;

    // Affichez à nouveau le bouton de calcul (au cas où il avait été caché)
    document.getElementById("calculButton").style.display = "block";

    // Cachez les résultats
    document.getElementById("results").style.display = "none";

    // Effacez le contenu du champ d'entrée
    document.getElementById("ageInput").value = "";
});