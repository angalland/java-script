const carre = document.createElement("div");        // crée un nouvel élément div
carre.classList.add("carre");                       // lui ajoute la class "carre"
const article = document.querySelector("article");  // selectionne le 1er article du dom


for (i = 1; i <= 9; i++) {                          // crée une boulce de 1 a 9
    let newcarre = carre.cloneNode();               // crée une copie de carre a chaque itération de la boucle
    article.appendChild(newcarre);                  // Place cette copie a la suite d'article dans le dom
    
}

let nb = 0 ;                                        // crée une variable nb qui vaut 0
function tour() {                                   // crée une fonction tour
    nb++;                                           // incrémente nb a chaque tour de 1
    return nb % 2 === 0 ? "O" : "X";                // retourne "O" si le modulo de nb par 2 = 0 sinon retounre "X" (permet de déterminer si un nombre est paire ou non)
}

function jouer() {                                  // crée une fonction jouer 
    if(!this.innerHTML) this.innerHTML = tour ();   // la fonction prend la valeur de la fonction tour si elle n'a pas déjà une valeur
}

let cellules = document.querySelectorAll(".carre"); // selectionne tous les éléments ayant l'attribut "carre"


let joeurTour = document.createElement("h1");       // créer un élément "h1"
article.appendChild(joeurTour);                     // place cet élément à la suite d'article


function aQuiTour(){                                // crée une fonction aQuiTour
    if (this.innerHTML == "X") {                                    // si la valeur de jouer = "X"
        return joeurTour.innerHTML = "C'est au joeur O de jouer !"  // alors retourne cette phrase
    } else {
        return joeurTour.innerHTML = "C'est au joeur X de jouer !"  // sinon cette phrase-ci
    }
}

function partieTerminer () {                        // crée une fonction partieTerminer
    if (cellules[0].innerHTML !== '' && cellules[1].innerHTML !== '' && cellules[2].innerHTML !== '' && cellules[3].innerHTML !== '' && cellules[4].innerHTML !== '' && cellules[5].innerHTML !== '' && cellules[6].innerHTML !== '' && cellules[7].innerHTML !== '' && cellules[8].innerHTML !== '') {
        return joeurTour.innerHTML = "La partie est terminé !"
    }                                               // vérifie à chaque emplacement de cellules si il y a du texte, si toutes les cellules sont remplies retoune la phrase ci-dessus
}

cellules.forEach(el => el.addEventListener("click", jouer));            // Pour chaque élément de la cellules on crée un évenement click et on appelle la fonction jouer
cellules.forEach(el => el.addEventListener("click", aQuiTour));         // De même on appelle la fonction aQuiTour
cellules.forEach(el => el.addEventListener("click", partieTerminer));   // De même on appelle la fonction partieTerminer

