let nbCarre = [];   // crée une variable tableaux qui contiendra tous les carre crées

function addCarre () {  // fonction qui crée un carré
    let carre = document.createElement("div");
    carre.classList.add("carre");
    let article = document.querySelector("article")
    article.appendChild(carre);
    carre.style.backgroundColor = couleurAleatoire();  // le backgrundcolor des carres sera par la fonction couleurAleatoire
    nbCarre.push(carre); // chaque carre créé sera ajouter au tableau de nbCarre  
};

function enleverCarre() {   // fonction qui enleve le dernier carre 
    if (nbCarre.length > 0) {   // vérifie que le tableau n'est pas vide
    let lastcarre = nbCarre.pop(); // crée une variable qui est le dernier carré retiré du tableau
    document.getElementById("article").removeChild(lastcarre);  // je selectionne l'element ayant pour id article et je lui retire son dernier enfant qui est ici le dernier carre retire du tableaux
}}

function couleurAleatoire(){    // fonction permettant de definir la couleur aleatoire en hexadécimale
    let aleatoire = (Math.random() * 0xFFFFFF << 0).toString(16);   // crée une variable qui sera un nombre aleatoire compris entre 0 et 999999 
    return "#" + aleatoire; // retourne # plus le nombre hexadécimale aleatoire ce qui crée une couleur aléatoire
}

document.addEventListener("keydown", function(event){   // ajoute un evenement clavier 
    if (event.key === "ArrowDown") {                    // conditionne l'evenement a la pression de la fleche du bas
        addCarre();                                     // crée un carre
    }
})

document.addEventListener("keydown", function(event){   // ajoute un evenement au clavier
    if (event.key === "ArrowUp") {                      // conditionne l'evenement a la pression de la fleche du haut 
        enleverCarre();                                 // enleve un carre
    }
})

