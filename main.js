const navbarMenu = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const firstContactIcons = document.querySelector(".contact-icons-first");
const crossIcon = document.querySelector(".navbar-cross-icon")

navbarMenu.addEventListener("click", ()=> {
    showNavLinks();
    console.log(crossIcon.classList);
});

crossIcon.addEventListener("click", ()=> {
    hideNavLinks();
    console.log(crossIcon.classList);
});

function showNavLinks() {
    navbarMenu.classList.add("hide");
    crossIcon.classList.remove("hide");
    crossIcon.classList.add("show");
    navList.classList.add("show");
    firstContactIcons.classList.add("show");
}
function hideNavLinks() {
    navbarMenu.classList.remove("hide");
    crossIcon.classList.remove("show");
    crossIcon.classList.add("hide");
    navList.classList.remove("show");
    firstContactIcons.classList.remove("show");
}