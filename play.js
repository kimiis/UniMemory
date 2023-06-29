let images = shuffle([

    "Images_Memory/images avec fond/caca licorne.png",
    "Images_Memory/images avec fond/licorne folle.png",
    "Images_Memory/images avec fond/licorne ivre.png",
    "Images_Memory/images avec fond/licorne mitraillette.png",
    "Images_Memory/images avec fond/licorne pète.png",
    "Images_Memory/images avec fond/licorne pipi.png",
    "Images_Memory/images avec fond/licorne vomit wc.png",
    "Images_Memory/images avec fond/licorne vomito.png",
    "Images_Memory/images avec fond/caca licorne.png",
    "Images_Memory/images avec fond/licorne folle.png",
    "Images_Memory/images avec fond/licorne ivre.png",
    "Images_Memory/images avec fond/licorne mitraillette.png",
    "Images_Memory/images avec fond/licorne pète.png",
    "Images_Memory/images avec fond/licorne pipi.png",
    "Images_Memory/images avec fond/licorne vomit wc.png",
    "Images_Memory/images avec fond/licorne vomito.png",

]);
let totalCard = images.length
let pileDeCarte = [];
let compteurDeCoup = 0
console.log(localStorage.getItem("config"));
window.onload = init;
let chrono 
function init() {
    afficherTab();
    document.addEventListener("keypress", restartGame);
}

function afficherTab() {
    chrono = 0
    //je récupère et je vide le tab*/
    let plateau = document.getElementById("plateau");
    plateau.innerHTML = "";

    // je génère mon tab*/
    for (let i = 0; i < 4; i++) {

        // créa balise tr
        let tr_elem = document.createElement("tr");

        for (let j = 0; j < 4; j++) {
            let td_elem = document.createElement("td");

            //creation d'une balise img qui correspond face caché*/
            let img_elem = document.createElement("img");
            img_elem.src = "Images_Memory/images avec fond/reverse card unimemory.png";
            img_elem.alt = "image face cachée arc en ciel avec ecrit uniMemory"
            img_elem.classList.add("memory-image"); // a modifier en css*/
            img_elem.id = i * 4 + j;

            //j'add un event quand je click sur img
            img_elem.addEventListener("click", flipCard);

            //chaque img doit etre affecter au td correspondant*/
            td_elem.appendChild(img_elem);

            // je prend un tr auquel j'add un enfant*/
            tr_elem.appendChild(td_elem);
        }
        // j'add le tr a mon plateau*/
        plateau.appendChild(tr_elem);

    }
    compteurDeCoup = 0
    let AfficheurDeCoup = document.getElementById("compteur");
    AfficheurDeCoup.innerHTML = compteurDeCoup;

    setInterval(() => {
        document.getElementById("timer").innerHTML = chrono
        chrono += 1
    }, 1000);
}

function returnCard(card1, card2) {
    card1.src = "Images_Memory/images avec fond/reverse card unimemory.png";
    card2.src = "Images_Memory/images avec fond/reverse card unimemory.png";
    pileDeCarte = [];
    card1.classList.remove("find");
    card2.classList.remove("find")
}

function flipCard(event) {
    if (event.srcElement.classList.contains("find")) {
        return
    }
    // si on a deja 2 cartes de retournés on n'autorise pas de clique*/
    if (pileDeCarte.length == 2) {
        return;
    }
    //console.log(event)
    event.srcElement.classList.add("find")
    // on recup l'id de l'img dans laquelle je viens de cliquer*/
    let index = event.srcElement.id;

    // on change la source de l'img (retourner la carte)
    event.srcElement.src = images[index];

    //garde en mémoire la carte sur laquelle le joueur à cliqué
    pileDeCarte.push(event.srcElement);


    //si j'ai 2 carte retournées*/
    if (pileDeCarte.length == 2) {
        compteurDeCoup += 1
        let AfficheurDeCoup = document.getElementById("compteur");
        AfficheurDeCoup.innerHTML = compteurDeCoup;

        // est ce que mes deux cartes sont identiques*/
        if (pileDeCarte[0].src == pileDeCarte[1].src) {
            pileDeCarte = [];
            totalCard = totalCard - 2;
            console.log("GG, well play!");
            console.log(totalCard);

            if (totalCard == 0) {
                localStorage.setItem("scores", localStorage.getItem("scores") + ";" +  compteurDeCoup)
                localStorage.setItem("temps", localStorage.getItem("temps") + ";" +  chrono)
                window.alert("Yay c'est fini")
            }

        } else {

            setTimeout(returnCard, 500, pileDeCarte[0], pileDeCarte[1]);
            console.log("Mdr t'es nul(le)");
        }
    }

}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
function restartGame(event) {

    if (event.code == "Space") {
        document.location.reload(true);
    }
};

