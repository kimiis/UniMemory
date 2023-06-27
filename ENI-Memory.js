console.log("test")
window.onload = function () {
    /* Sélection des éléments HTML */
    let link = document.getElementById('boxBurger')
    let burger = document.getElementById('burger')
    let ul = document.querySelector('ul')
    console.log(link)
    console.log(burger)
    console.log(ul)
    /* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
    link.addEventListener('click', function (e) {
        e.preventDefault()
        burger.classList.toggle('open')
        ul.classList.toggle('open')
    })
};
//créer le cookie*/
document.cookie = "prénom=chocolat";
//l'editer*/
document.cookie = "prénom = praliné";

/* add 2nd cookie*/

document.cookie = "vanille";

/* add durée de vie 1h*/
document.cookie = "praliné;max-age=3600";
document.cookie = "vanille;max-age=3600";

/*le delete*/

document.cookie = "vanille;max-age=0";

/*récup le cookie*/

let cookies = document.cookie;
console.log(cookies);
//on devrait ecup une chaine de carac de ce type : prénom praliné; nom = vanille*/

/* pour les utiliser*/

let cookieTab = cookies.split(';');
for (let ck of cookieTab) {
    let cookie = ck.split('=');
    if (cookie[0] == 'prenom') {
        console.log("Salut" + cookie[1] + "!");
    }
}

/*donnée stocké dans le local pas de durée de vie*/ 
localStorage.setItem("nom", "Lucie");
//*recup*/
let nom = localStorage.getItem("nom");
console.log(nom);

//a la diff session = delete une fois session renouvelé*/
sessionStorage.setItem('surnom','Lulu');
let surnom= sessionStorage.getItem('surnom');
console.log(surnom)


