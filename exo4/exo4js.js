// const carre = document.createElement("div");
// carre.classList.add("carre");
// const article = document.querySelector("article");


// window.addEventListener("keydown", function (event) {
//     if (event.key === 'ArrowDown'){
        
//         let newcarre = carre.cloneNode();
//         article.appendChild(newcarre);
        
        
//         let aleatoire = (Math.random() * 0xFFFFFF << 0).toString(16);
//         let couleurAleatoire = document.querySelectorAll(".carre");
        
//         couleurAleatoire.style.backgroundColor = "#" + aleatoire;
        
        
//     }});
    
    // } else if (event.key === 'ArrowUp')
    //     (".carre").unwrap("article");

function addCarre () {
    let carre = document.createElement("div");
    carre.classList.add("carre");
    let article = document.querySelector("article")
    article.appendChild(carre);
    carre.style.backgroundColor = couleurAleatoire();
};

function enleverCarre() {
    document.getElementsByName("article").removeChild(carre);
}

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
