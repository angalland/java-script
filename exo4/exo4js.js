let nbCarre = [];   // crée une variable 

function addCarre () {
    let carre = document.createElement("div");
    carre.classList.add("carre");
    let article = document.querySelector("article")
    article.appendChild(carre);
    carre.style.backgroundColor = couleurAleatoire();
    nbCarre.push(carre);
};

function enleverCarre() {
    if (nbCarre.length > 0) {
    let lastcarre = nbCarre.pop();
    document.getElementById("article").removeChild(lastcarre);
}}

function couleurAleatoire(){
    let aleatoire = (Math.random() * 0xFFFFFF << 0).toString(16); 
    return "#" + aleatoire;
}

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowDown") {
        addCarre();
    }
})

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowUp") {
        enleverCarre();
    }
})
