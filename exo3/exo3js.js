const carre = document.createElement("div");
carre.classList.add("carre");
const article = document.querySelector("article");


for (i = 1; i <= 9; i++) {
    let newcarre = carre.cloneNode();
    article.appendChild(newcarre);

    let joeur1 = "X";
    let joeur2 = "O";
    let tourJoeur = joeur1;

    newcarre.addEventListener("click", function(event) {

            event.target.innerText = tourJoeur;
            if (tourJoeur == joeur1) {
                tourJoeur = joeur2;
            } else {
                tourJoeur = joeur1;
            }
    })

   
}


