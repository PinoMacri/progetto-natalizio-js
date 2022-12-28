//^ --------------------- HEADER ---------------------*/
//**----- Prendo Elementi Header -----*/
const burgerMenu = document.getElementById("burgerMenu")
const officialMenu = document.getElementById("officialMenu")
const closeMenu = document.getElementById("closeMenu")
//**----- Burger Menù -----*/
burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.add("d-none");
    closeMenu.classList.remove("d-none")
    officialMenu.classList.remove("d-none", "align-items-center");
    officialMenu.classList.add("flex-column", "align-items-end");
})
//**----- Close Menù -----*/
closeMenu.addEventListener("click", function () {
    burgerMenu.classList.remove("d-none");
    closeMenu.classList.add("d-none")
    officialMenu.classList.add("d-none");
})
//~-----------------------------------------------------*/
