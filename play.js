let images = [

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

];
let pileDeCarte = [];

window.onload = init;

function init() {
    afficherTab();
}

function afficherTab() {
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
            img_elem.classList.add("memory-image", "playable"); // a modifier en css*/
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
}
function flipCard(event) {
    // si on a deja 2 cartes de retournés on n'autorise pas de clique*/
    if(pileDeCarte.length == 2){
        return;
    }
    //console.log(event)

    // on recup l'id de l'img dans laquelle je viens de cliquer*/
    let index = event.srcElement.id;

    // on change la source d el'img (retourner la carte)
    event.srcElement.src = images[index];

    //garde en mémoire la carte sur laquelle le joueur à cliqué
    pileDeCarte.push(event.srcElement);

    //si j'ai 2 carte retournées*/
    if (pileDeCarte.length == 2) {
        // est ce que mes deux cartes sont identiques*/
        if (pileDeCarte[0].src == pileDeCarte[1].src) {
            
            console.log("bingo");

        } else {
            console.log("mdr t'es nul");
        } 

    }
}

