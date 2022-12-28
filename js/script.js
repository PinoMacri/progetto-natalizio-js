//^ --------------------- HEADER ---------------------*/
const burgerMenu = document.getElementById("burgerMenu")
const officialMenu = document.getElementById("officialMenu")
const closeMenu = document.getElementById("closeMenu")
burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.add("d-none");
    closeMenu.classList.remove("d-none")
    
})
closeMenu.addEventListener("click", function () {
    burgerMenu.classList.remove("d-none");
    closeMenu.classList.add("d-none")
})