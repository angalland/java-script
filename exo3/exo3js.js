const carre = document.createElement("div");
carre.classList.add("carre");
const article = document.querySelector("article");


for (i = 1; i <= 9; i++) {
    let newcarre = carre.cloneNode();
    article.appendChild(newcarre);
    
}

let nb = 0 ;
function tour() {
    nb++;
    return nb % 2 === 0 ? "O" : "X";
}

function jouer() {
    if(!this.innerHTML) this.innerHTML = tour ();
}

let cellules = document.querySelectorAll(".carre");


let joeurTour = document.createElement("h1");
article.appendChild(joeurTour);


function aQuiTour(){
    if (this.innerHTML == "X") {
        return joeurTour.innerHTML = "C'est au joeur O de jouer !"
    } else  {
        return joeurTour.innerHTML = "C'est au joeur X de jouer !"
    }
}

function partieTerminer () {
    if (cellules[0].innerHTML !== '' && cellules[1].innerHTML !== '' && cellules[2].innerHTML !== '' && cellules[3].innerHTML !== '' && cellules[4].innerHTML !== '' && cellules[5].innerHTML !== '' && cellules[6].innerHTML !== '' && cellules[7].innerHTML !== '' && cellules[8].innerHTML !== '') {
        return joeurTour.innerHTML = "La partie est terminé !"
    }
}

cellules.forEach(el => el.addEventListener("click", jouer));
cellules.forEach(el => el.addEventListener("click", aQuiTour));
cellules.forEach(el => el.addEventListener("click", partieTerminer));



