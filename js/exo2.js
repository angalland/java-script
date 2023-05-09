//  document.querySelectorAll("carre").addEventListener("click", function(){
//     console.log("boite", "clik !");
// });

// function clickerBoite(){
// document.getElementsByClassName("carre").addquerySelector("carre-click");
// }

const carre = document.createElement("div"); // crée un élément div
carre.classList.add("carre"); // lui ajoute la class carre

const article = document.querySelector("article"); //selectionne la premiere balise du dom article
// article.appendChild(carre); // place l'element carre apres article
// carre.innerText = 1; // ecrit un noeud de texte

for (let i = 1; i<= 4; i++){
    let newcarre = carre.cloneNode(); // a chaque boucle crée un carre clone
    newcarre.innerText = i; // a chaque boucle insere du texte
    article.appendChild(newcarre); // a chaque boucle le place en enfant d'article

    newcarre.addEventListener("click", function(){
        console.log("boite n "+ i + ", click ! ")
        newcarre.classList.add("carre-click")
        })
    }


