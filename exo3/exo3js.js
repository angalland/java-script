const carre = document.createElement("div");
carre.classList.add("carre");
const article = document.querySelector("article");


for (i = 1; i <= 9; i++) {
    let newcarre = carre.cloneNode();
    article.appendChild(newcarre);
}

let nb = 0 ;

const cellules = document.querySelectorAll(".carre");

function tour() {
    nb++;
    return nb % 2 === 0 ? "O" : "X";
}

function jouer() {
    if(!this.innerHTML) this.innerHTML = tour ();
}

cellules.forEach(el => el.addEventListener("click", jouer));




