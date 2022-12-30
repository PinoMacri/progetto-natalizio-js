//^ --------------------- HEADER ---------------------*/
//**----- Nav -----*/
const burgerMenu = document.getElementById("burgerMenu")
const officialMenu = document.getElementById("officialMenu")
const closeMenu = document.getElementById("closeMenu")
//----- Burger Menù -----*/
burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.add("d-none");
    closeMenu.classList.remove("d-none")
    officialMenu.classList.remove("d-none", "align-items-center");
    officialMenu.classList.add("flex-column", "align-items-end");
})
//----- Close Menù -----*/
closeMenu.addEventListener("click", function () {
    burgerMenu.classList.remove("d-none");
    closeMenu.classList.add("d-none")
    officialMenu.classList.add("d-none");
})
//~-----------------------------------------------------*/
//^ ----------------------- MAIN -----------------------*/
//**----- Slide Jumbotron -----*/
const carousel = document.getElementById("carouselExampleAutoplaying")
carousel.innerHTML =
    `  <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/digital-art-warrior-knight-horse-shield-Sun-1512243-wallhere.com.jpg" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/4649701.jpg" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/1237368.jpg" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/1237391.jpg" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="img/3976786.jpg" alt="...">
                </div>
    </div>`
//**----- Crea PG Section -----*/
const personaggi = ["Mago", "Guerriero", "Arcere"]
const personaggio = []
const buttonPg = document.getElementById("buttonPg")
let risultato = document.getElementById("risultato")
//----- Click al Button -----*/
buttonPg.addEventListener("click", function () {
    const campoMinato = document.getElementById("campoMinato")
    campoMinato.classList.remove("d-none")
    //----- Nome PG -----*/
    const namePg = document.getElementById("nome")
    let namePgValue = namePg.value
    if (!isNaN(namePgValue)) {
        alert("Compila il campo con un nome, non sono accettati numeri")
        namePg.value = ""
        return false;
    } else {
        personaggio.push(namePgValue)
        namePg.value = ""
    }
    //----- Razza -----*/
    let razza = document.getElementById("razza")
    let razzaValue = razza.value
    if (razzaValue === "Mago") {
        personaggio.push(`<div>${razzaValue}</div> <div class="dimensionPg "><img class="perImg img-fluid"  src="img/mago.png" alt="1"></div>`)
        razza.value = ""
    } else if (razzaValue === "Arcere") {
        personaggio.push(`<div>${razzaValue}</div> <div class="dimensionPg w-100"><img class="w-100 h-100" src="img/arcere.png" alt="1"></div>`)
        razza.value = ""
    }
    else if (razzaValue === "Guerriero") {
        personaggio.push(`<div>${razzaValue}</div> <div class="dimensionPg w-100"><img class="w-100 h-100" src="img/guerriero.png" alt="1"></div>`)
        razza.value = ""
    } else {
        alert("Devi scegliere tra Mago, Guerriero o Arcere")
        razza.value = ""
    }
    //----- Nascita -----*/
    let nascita = document.getElementById("nascita")
    let nascitaValue = nascita.value
    personaggio.push(nascitaValue)
    //----- Pianeta -----*/
    let pianeta = document.getElementById("pianeta")
    if (!isNaN(pianeta.value)) {
        alert("Compila il campo con un nome, non sono accettati numeri")
        pianeta.value = ""
        return false;
    } else {
        personaggio.push(pianeta.value)
        pianeta.value = ""
    }
    risultato.innerHTML = `
    <div class="radiusCard boxSdw text-center d-flex flex-column align-items-center">
    <div class="classicStyle-2">Razza: ${personaggio[1]} </div>
    <div class="pt-4 classicStyle-2">Nome dell'Eroe: ${personaggio[0]} </div>
    <div class="p-1 classicStyle-2">Nato nel lontano ${personaggio[2]} </div>
    <div class="p-1 classicStyle-2">Nel magico mondo di ${personaggio[3]} </div>
    </div> `
})
//**----- Campo Minato Lv1 Section -----*/
const unicoNumeroRandom = (min = 1, max = 100, blackList) => {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    } while (blackList.includes(randomNumber))
    return randomNumber;
}
let campoM = document.getElementById("campoM")
let randomNumbers = []
const popup = document.getElementById("popup")
const risultatos = document.getElementById("risultatos")
let counter = [0]
for (let i = 1; i <= 40; i++) {
    let singleDiv = document.createElement("button")
    campoM.appendChild(singleDiv)
    singleDiv.append(i)
    singleDiv.addEventListener("click", function () {
        singleDiv.classList.add("bg-primary")

        singleDiv.disabled = true;
        ++counter
        let hasBomb
        if (hasBomb = extractedNumber.includes(i)) {
            singleDiv.classList.add("bg-danger")
            campoM.innerHTML += `<div class="mt-5"><p class="text-white text-center">La partita è finita! il tuo punteggio è stato di ${(counter) - 1} punti! Purtroppo non eri tu il prescelto per sconfiggere lo Jenken :( se vuoi, riaggiorna la pagina e ricomincia</p></div>`
        } else if ((counter === 5) && (!(hasBomb = extractedNumber.includes(i)))) {
            campoM.innerHTML += `<div class="mt-5"><p class=" text-center text-white">Complimenti, Hai vinto! Sei riuscito ad evitare la trappola dello Jenken per 5 volte, clicca il bottone per andare al secondo ed ultimo livello!</p></div>`
        }
        /* In questo caso il gioco si blocca in automatico perchè sono andato
        ad aggiungere testo nello stesso div dove ci sta il campo minato,
        se avessi fatto comparire il testo su un altro div avrei potuto
        continuare a giocare, questo perche inserendo += lui prende ciò
        che è effettivamente in quel momento il campo minato con le sue
        relative selezioni */
    })
}
const extractedNumber = [];
for (let i = 1; i <= 2; i++) {
    
    const cellNumber = unicoNumeroRandom(1, 40, extractedNumber)
    
    extractedNumber.push(cellNumber)
}
console.log(extractedNumber)
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click" , function () {
    campoM.classList.remove("d-none")
})





