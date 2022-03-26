const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".side-bar");

function toggleMenu() {
    sideBar.classList.toggle("active-side-bar");
    menu.classList.toggle("open-side-bar");
}

menu.addEventListener("click", toggleMenu);
