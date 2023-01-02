//! CAROSELLO CON MODALITA' DISSOLVENZA AUTOMATICA SIA DELLE IMMAGINI CHE DEI THUMBNAILS COMPLETO FATTO A MANO, FULL-OPTIONAL

//! 0) 
//*Prima di iniziare la logica crea il tutto in html per aggiustarlo con CSS, dopo di che cancellare e rifare dinamicamente
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
//* Genero le immagini e i thumbnails DINAMICI
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
//! 7) 
//* Opzionale: posso scorrere le immagini anche con i bottoni
const left = document.getElementById("left")
const right = document.getElementById("right")
/* Setto la freccia a destra, inserisco l'immagine successiva nel carosello
e lascio selezionato il thumbnails successivo,
Creo il controllo nel caso in cui siamo arrivati dopo l'ultima immagine
riniziamo dalla prima */
right.addEventListener("click", function () {
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
left.addEventListener("click", function () {
    images[currentActive].classList.remove("active")
    thumbs[currentActive].classList.remove("actives")
    currentActive--
    if (currentActive < 0) {
        currentActive = 5
    }
    images[currentActive].classList.add("active")
    thumbs[currentActive].classList.add("actives")
})
//------------------------------------------------------------------------------------------------------------------
//! 8) 
//* Al click del "PLAY", faccio partire le immagini e i thumbnails in automatico 
/* Prendo dalla pagina ciò che mi serve sia per il PLAY che per il REVERSE,
Prendo tutto subito perche gia qui mi servirà il reverse per farlo disabilitare
una volta che clicco il play
Prendo anche gli ABBR perchè mi serviranno per agganciarli dopo e cambiargli
il title, in modo che una volta che passo sopra col mouse mi indicheranno
la funzionalita del bottone */
const stopPlay = document.getElementById("stopPlay")
const automatico = document.getElementById("automatico")
const reverse = document.getElementById("reverse")
const noPlay = document.getElementById("noPlay")
/* Creo la variabile da appoggio dove andrò ad agganciare la function per le slide */
let slide;
/* Creo la flag che mi servirà per gestire il bottone*/
let flag = false
/* Le slide di img e thumb Cambieranno ogni 3 secondi */
automatico.addEventListener("click", function () {
    flag = !flag
    stopPlay.innerHTML = `<i class="fa-regular fa-circle-pause"></i>`
    stopPlay.title = "STOP"
    noPlay.classList.remove("spento")
    noPlay.classList.add("default")
    reverse.classList.remove("revo")   
    if (flag) {
        reverse.disabled = true;
        slide = setInterval(myFunction, 3000);
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
    } else if (flag === false) {
        reverse.disabled = false;
        noPlay.classList.add("spento")
        noPlay.classList.remove("default")
        reverse.classList.add("revo")
        clearInterval(slide)
        stopPlay.innerHTML = `<i class="fa-regular fa-circle-play"></i>`
        stopPlay.title = "START"
    }
})
//------------------------------------------------------------------------------------------------------------------
//! 9) 
//* Al click del "REVERSE", faccio partire le immagini e i thumbnails al contrario in automatico 
/* Creo la variabile da appoggio dove andrò ad agganciare la function reverse per le slide*/
let reverseSlide;
/* Creo la flag che mi servirà per gestire il bottone*/
let flags = false;
/* Le slide di img e thumb torneranno indietro ogni 3 secondi */
let hover = document.querySelectorAll("#reverse:hover")
reverse.addEventListener("click", function () {
    noPlay.title = "STOP REVERSE START"
    flags = !flags
    noPlay.innerHTML = `<i class="fa-regular fa-circle-pause"></i>`
    automatico.classList.remove("automaticos")
    stopPlay.classList.remove("automaticok")
    stopPlay.classList.add("default")
    if (flags) {
        automatico.disabled = true;
        reverseSlide = setInterval(myFunctions, 3000);
        function myFunctions() {
            images[currentActive].classList.remove("active")
            thumbs[currentActive].classList.remove("actives")
            currentActive--
            if (currentActive < 0) {
                currentActive = 5
            }
            images[currentActive].classList.add("active")
            thumbs[currentActive].classList.add("actives")
        }
    } else if (flags === false) {
        clearInterval(reverseSlide)
        automatico.disabled = false;
        automatico.classList.add("automaticos")
        stopPlay.classList.add("automaticok")
        stopPlay.classList.remove("default")
        noPlay.innerHTML = `<i class="fa-solid fa-arrow-rotate-left"></i>`
        noPlay.title = "REVERSE START"
    }
    console.log(flags)
})











