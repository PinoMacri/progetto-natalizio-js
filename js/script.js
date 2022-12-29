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






