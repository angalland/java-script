
// 1ere méthode si les carrés ne sont pas fait en html

const carre = document.createElement("div"); // crée un élément div
carre.classList.add("carre"); // lui ajoute la class carre

const article = document.querySelector("article"); //selectionne la premiere balise du dom article
// // article.appendChild(carre); // place l'element carre apres article
// // carre.innerText = 1; // ecrit un noeud de texte
// let newcarre = document.createElement("div"); cree un nouvelle element div

for (let i = 1; i<= 4; i++){
    let newcarre = carre.cloneNode(); // a chaque boucle crée un carre clone
    newcarre.innerText = i; // a chaque boucle insere du texte
    article.appendChild(newcarre); // a chaque boucle le place en enfant d'article

    newcarre.addEventListener("click", function(){  // a chaque boucle crée un évenement click
        if ( newcarre.classList.contains("carre-click") ) {  // si newcarre possede l'attribut de class "carre-click"
            newcarre.classList.remove("carre-click");       // enleve l'attribut
        } else {
            newcarre.classList.add("carre-click");          // ajoute l'attribut
        }})
        
}

// 2eme méthode si les carres sont déja fait en html

// var carreNonClicker = document.getElementsByClassName("carre");  selectionne dans une variables les éléments possédant la class carré

// function handleClick(event) {        créer une fonction pour savoir si l'élément est clicker ou non
//     var carreClicker = event.target;     créer une variable qui reagira a chaque fois qu'on clique desssus

//     if (carreClicker.classList.contains('carre-click')) {  si carreClicker contient deja "carre-click"
//         carreClicker.classList.remove("carre-click");      alors enleve "carre-click"
//     } else { 
//         carreClicker.classList.add("carre-click");         sinon ajoute "carre-click"
//     }
// }

// for (var i = 0; i< carreNonClicker.length; i++) {          Pour le nombre de carre 
//     carreNonClicker[i].addEventListener("click", handleClick);   ajoute a chaque carre l'évenement click et la fonction créer précedement
// }





