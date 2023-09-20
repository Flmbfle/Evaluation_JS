var tab = ["Alice", "Bob", "Charlie", "David", "Eva"];

function supprimerPrenom() {
    var prenomASupprimer = document.getElementById("prenomInput").value;
    var index = tab.indexOf(prenomASupprimer);

    if (index !== -1) {
        tab.splice(index, 1);
        document.getElementById("messageSuppression").textContent = "Le prénom a été supprimé.";
        document.getElementById("messageAjout").textContent = ""; // Efface le message d'ajout
    } else {
        document.getElementById("messageSuppression").textContent = "Le prénom n'a pas été trouvé.";
    }

    afficherListePrenoms(); // Appel de la fonction pour mettre à jour la liste
}

function ajouterPrenom() {
    var nouveauPrenom = document.getElementById("prenomInput").value;
    if (nouveauPrenom.trim() !== "") {
        tab.push(nouveauPrenom);
        document.getElementById("messageAjout").textContent = "Le prénom a été ajouté.";
        document.getElementById("messageSuppression").textContent = ""; // Efface le message de suppression
        document.getElementById("prenomInput").value = "";
    } else {
        document.getElementById("messageAjout").textContent = "Veuillez saisir un prénom valide.";
    }

    afficherListePrenoms(); // Appel de la fonction pour mettre à jour la liste
}

function afficherListePrenoms() {
    var listePrenoms = document.getElementById("listePrenoms");
    listePrenoms.innerHTML = ""; // Efface la liste existante

    for (var i = 0; i < tab.length; i++) {
        var li = document.createElement("li");
        li.textContent = tab[i];
        listePrenoms.appendChild(li);
    }
}

// Appeler la fonction pour afficher la liste initiale
afficherListePrenoms();