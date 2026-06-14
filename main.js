const toggleMenu = document.querySelector(".nav__icon-button");
const menu = document.querySelector('.nav__list'); 

toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("nav__list--active"); 
});
