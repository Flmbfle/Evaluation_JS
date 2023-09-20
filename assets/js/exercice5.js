var contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi par défaut du formulaire

            // Réinitialisez les messages d'erreur précédents
            var errorElements = document.getElementsByClassName("error");
            for (var i = 0; i < errorElements.length; i++) {
                errorElements[i].textContent = "";
            }

            var nom = document.getElementById("nom").value;
            var prenom = document.getElementById("prenom").value;
            var cp = document.getElementById("cp").value;
            var ville = document.getElementById("ville").value;
            var email = document.getElementById("email").value;
            var sexeFeminin = document.getElementById("sexeFeminin");
            var sexeMasculin = document.getElementById("sexeMasculin").checked;
            var conditionsAcceptees = document.getElementById("conditions").checked;
            var isValid = true;

            if (nom.length < 1) {
                document.getElementById("nomError").textContent = "Votre nom doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (prenom.length < 1) {
                document.getElementById("prenomError").textContent = "Votre prénom doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (!/^\d{5}$/.test(cp)) {
                document.getElementById("cpError").textContent = "Le code postal doit comporter 5 caractères numériques.";
                isValid = false;
            }

            if (ville.length < 1) {
                document.getElementById("villeError").textContent = "La ville doit comporter au moins 1 caractère.";
                isValid = false;
            }

            if (email.indexOf("@") === -1) {
                document.getElementById("emailError").textContent = "L'adresse email doit contenir le caractère '@'.";
                isValid = false;
            }
            
            if (!sexeFeminin && !sexeMasculin) {
                document.getElementById("sexeError").textContent = "Veuillez sélectionner votre sexe.";
                isValid = false;
            }
        
            if (!conditionsAcceptees) {
                document.getElementById("conditionsError").textContent = "Vous devez accepter les conditions.";
                isValid = false;
            }

            if (isValid) {
                // Si toutes les validations sont réussies, vous pouvez soumettre le formulaire ici
                // contactForm.submit();
                alert("Formulaire soumis avec succès!");
            }
        });