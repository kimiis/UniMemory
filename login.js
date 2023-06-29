console.log(localStorage.getItem("password"))
console.log(localStorage.getItem("username"))
console.log(localStorage.getItem("mail"))


let log;
let mailEntree;
let pwEntree;

onload = init;

function init() {
    log = document.getElementById("connecter");
    log.addEventListener("click",seConnecter)
}

function seConnecter() {
    mailEntree = document.getElementById("mail").value;
    pwEntree = document.getElementById("pw").value;
    if(localStorage.getItem("mail") === mailEntree && localStorage.getItem("password") === pwEntree) {
        document.location.href = "./profil.html";
    }else{
        document.getElementById("body").classList.toggle("shaketonbooty")
        setTimeout(()=>{
            document.getElementById("body").classList.toggle("shaketonbooty")
        }, 2000)
        alert("WESH TU T TROMPAIS")
    }

}
 
