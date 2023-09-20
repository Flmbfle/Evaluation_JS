function comptage(){
//Initialisation des variables
let age;
let moins20 = 0;
let entre20et40 = 0;
let plus40 = 0;


while (true) {
  age = parseInt(prompt("Entrez l'âge de la personne (ou entrez 0 pour terminer) :"));

if (age === 0 || age === ""){ //Si 0 ou vide , arreter la saisie
    break;
} else if (age >= 100 ) { //Si +100 , incrémenter "centenaire" puis arreter la saisie
  plus40++
  break;
} else if (age < 20){ //Si -20 incrémenter "moins20"
  moins20++;
} else if (age <= 40){ //Si inférieur ou égal à 40 incrémenter "entre20et40"
  entre20et40++ 
} else if (age === ""){
  probleme++
} 
}
// Mettre à jour le contenu des éléments HTML avec les résultats
document.getElementById("moins20").textContent = moins20;
document.getElementById("entre20et40").textContent = entre20et40;
document.getElementById("plus40").textContent = plus40;



// Afficher les résultats
document.getElementById("results").style.display = "block";
}