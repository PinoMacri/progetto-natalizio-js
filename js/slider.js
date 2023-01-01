//! CAROSELLO CON MODALITA' DISSOLVENZA AUTOMATICA SIA DELLE IMMAGINI CHE DEI THUMBNAILS COMPLETO FATTO A MANO

//! 1) 
//* Preparo l'array con gli URL delle immagini, servono per crearle dinamicamente sotto
const sources = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.png"
]
//------------------------------------------------------------------------------------------------------------------
//! 2) 
//* Prendo dalla pagina gli elementi statici dove dentro andrò a creare i div con le immagini e thumbnails
const padre = document.getElementById("padres")
const figlios = document.getElementById("figlios")
//------------------------------------------------------------------------------------------------------------------
//! 3) 
//* Genero le immagini e i thumbnails
for (let i = 0; i < sources.length; i++) {
    const divImg = `<div><img class="carosello" src=${sources[i]} alt=""></div>`
    padre.innerHTML += divImg
    const divThumb = `<div><img class="thumb" src=${sources[i]} alt=""></div>`
    figlios.innerHTML += divThumb
}
//------------------------------------------------------------------------------------------------------------------
//! 4) 
//* Prendo dalla pagina tutte le immagini e i thumbnails che ho creato
/* Sono obbligato a prenderli dopo che li ho creati perche prima non esisterebbero ancora,
quindi se li sposto sopra non li troverà */
const images = document.querySelectorAll("#padres img")
const thumbs = document.querySelectorAll(".thumb")
//------------------------------------------------------------------------------------------------------------------
//! 5) 
//* Setto il currentActive e aggiungo le classi active/actives all'immagine e thumb iniziali
/* Ne ho create 2 per ordine, active per immagini e actives per i thumbnail */
let currentActive = 0
images[currentActive].classList.add("active")
thumbs[currentActive].classList.add("actives")
//------------------------------------------------------------------------------------------------------------------
//! 6) 
//* Creo la funzion per far scorrere ogni 3 secondi le immagini del carosello e delle thumbnail
const clock = setInterval(myFunction, 3000);
function myFunction() {
    images[currentActive].classList.remove("active")
    thumbs[currentActive].classList.remove("actives")
    currentActive++
    if (currentActive === images.length) {
        currentActive = 0
    }
    images[currentActive].classList.add("active")
    thumbs[currentActive].classList.add("actives")
}
//------------------------------------------------------------------------------------------------------------------
//! 7) 
//* Quando clicco il thumbnail, lo lascio selezionato deselezionando l'altro e lo faccio apparire nel carosello
for (let i = 0; i < thumbs.length; i++) {
    const thumb = thumbs[i]
    thumb.addEventListener("click", function () {
        images[currentActive].classList.remove("active")
        thumbs[currentActive].classList.remove("actives")
        currentActive = i
        images[currentActive].classList.add("active")
        thumbs[currentActive].classList.add("actives")
    })
}
//------------------------------------------------------------------------------------------------------------------
//! 8) 
//* Opzionale: posso scorrere le immagini anche con i bottoni
const left = document.getElementById("left")
const right = document.getElementById("right")
/* Setto la freccia a destra, inserisco l'immagine successiva nel carosello
e lascio selezionato il thumbnails successivo,
Creo il controllo nel caso in cui siamo arrivati dopo l'ultima immagine
riniziamo dalla prima */
right.addEventListener("click" , function(){
    images[currentActive].classList.remove("active")
    thumbs[currentActive].classList.remove("actives")
    currentActive++
    if (currentActive === images.length) {
        currentActive = 0
    }
    images[currentActive].classList.add("active")
    thumbs[currentActive].classList.add("actives")
})
/* Setto la freccia a sinistra, inserisco l'immagine precedente nel carosello
e lascio selezionato il thumbnails precedente,
Creo il controllo nel caso in cui siamo arrivati prima della prima immagine
riniziamo dall'ultima */
left.addEventListener("click" , function(){
    images[currentActive].classList.remove("active")
    thumbs[currentActive].classList.remove("actives")
    currentActive--
    if (currentActive < 0 ) {
        currentActive = 5
    }
    images[currentActive].classList.add("active")
    thumbs[currentActive].classList.add("actives")
})





