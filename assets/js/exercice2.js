var nombre = prompt('Entre la table de multiplication souhaitez')

function TableMultiplication(nombre) {
    let tableHTML = '<h3>Table de multiplication de ' + nombre + '</h3>';
    
    for (let i = 1; i <= 10; i++) {
        const resultat = i * nombre;
        tableHTML += `${i} x ${nombre} = ${resultat}<br>`;
    }

    //Affectez le contenu généré à l'intérieur de la div'resultat'
    document.getElementById('resultat').innerHTML = tableHTML;
}

// Appel de la variable
TableMultiplication(nombre);