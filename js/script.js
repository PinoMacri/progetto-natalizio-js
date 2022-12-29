//^ --------------------- HEADER ---------------------*/
//**----- Nav, Prendo Elementi -----*/
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
//^ ----------------------- MAIN -----------------------*/
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






