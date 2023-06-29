console.log(localStorage.getItem("username"))
console.log(localStorage.getItem("mail"))
console.log()
console.log(localStorage.getItem("temps").split(";"))



onload = init;

function init() {
    let user = document.getElementById("username");
    let mail = document.getElementById("mail");
    user.value = localStorage.getItem("username");
    mail.value =localStorage.getItem("mail");
    scores = localStorage.getItem("scores").split(";")
    timers = localStorage.getItem("temps").split(";")
    table = document.getElementById("tableauScore")

    if(scores.length !== timers.length){
        alert("TA TRICHAIS")
    }else{
        for(i=1;i< scores.length; i++){
            let tr_elem = document.createElement("tr");
            let td_elem = document.createElement("td");
            let td2_elem = document.createElement("td");
            td_elem.innerHTML = scores[i]
            td2_elem.innerHTML = timers[i]
            tr_elem.appendChild(td_elem)
            tr_elem.appendChild(td2_elem)
            table.appendChild(tr_elem)
        }
        
    }
    
}

function saveConfig(elem){
    localStorage.setItem("config", elem.value);
}