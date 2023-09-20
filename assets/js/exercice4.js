var PU = parseFloat(prompt('Prix unitaire du produit :'));
var QTECOM = parseInt(prompt('Quantité commandée :'));

// Calcul du prix total
var TOT = PU * QTECOM ;

// Inittialisation des variables à zéro
var REM = 0 ;
var PORT = 0 ;


//Calcl de la remise
if (TOT >= 100 && TOT <=200) {
    REM = 0.05 * TOT;
} else if (TOT > 200) {
    REM = 0.10 * TOT;
}

//Init du total après remise
var TOTREM = TOT - REM

// Calcul frait de port
if (TOTREM >= 500) {
    PORT = 0;
} else {
    PORT = Math.max(TOTREM *0.02, 6)
}

var PAP = TOTREM + PORT

// Création des résultats
document.getElementById("PU").textContent = PU + "€";
document.getElementById("QTECOM").textContent = QTECOM + "€";
document.getElementById("TOT").textContent = TOT + "€";
document.getElementById("REM").textContent = REM + "€";
document.getElementById("TOTREM").textContent = TOTREM + "€";
document.getElementById("PORT").textContent = PORT + "€";
document.getElementById("PAP").textContent = PAP + "€";

// Afficher les résultats
document.getElementById("results").style.display = "block";




