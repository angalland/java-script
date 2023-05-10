function convertir(){ 
    let euros = document.getElementById("euros").value;
    let franc = euros * 6.55957;
    if (isNaN(franc)) {
        document.getElementById("result").innerHTML = "Veuillez saisir une valeur numérique !";
    } else {
        document.getElementById("result").innerHTML = franc.toFixed(2) + " francs";
    }
}