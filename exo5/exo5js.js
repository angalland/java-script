function convertir(){ // fonction convertir euros en francs
    let euros = document.getElementById("euros").value; // crée une variable qui récupère la valeur de l'élément ayant pour id euros
    let franc = euros * 6.55957; // Calcule qui convertit l'euros en franc
    if (isNaN(franc)) {   // fonction isNaN vérifie si une valeur est NaN cad n'est pas un nombre (Not a Number) 
        document.getElementById("result").innerHTML = "Veuillez saisir une valeur numérique !"; // si ce n'est pas un nombre renvoie cette phrase
    } else {
        document.getElementById("result").innerHTML = franc.toFixed(2) + " francs"; // si c'est un nombre renvoie le calcule convertissant a 2 décimals pret (fonction toFixed)
    }
}