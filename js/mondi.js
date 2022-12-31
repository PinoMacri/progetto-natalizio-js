
const risultato = document.getElementById("risultato")
const contea = document.getElementById("contea")
const min = document.getElementById("min")
const max = document.getElementById("max")
const genera = document.getElementById("genera")
genera.addEventListener("click", function () {
    let n = parseInt(min.value) 
    let k = parseInt(max.value) 
    for (let i = 1; i < contea.value; i++) {
        let random = Math.random()
        let result = Math.floor (random * (k + 1 - n)) + n;
        const div = document.createElement("div")
        div.classList.add("personalization")
        div.append(result)
        risultato.appendChild(div)
    }
})
const reset = document.getElementById("reset")
reset.addEventListener("click" , function (){
    contea.value = ""
    min.value = ""
    max.value = ""
    risultato.innerText = ""
})
