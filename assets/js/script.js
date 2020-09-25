// navbar
const navToggler = document.querySelector('.nav-toggler')
const navTogglerOpen = "nav-toggler-open";
const navMenu = document.querySelector('.nav-menu')
const navMenuOpen = "nav-menu-open"
const navButton = document.querySelector('.nav-button');

navToggler.addEventListener('click', toggleNav);

function toggleNav() {
    navToggler.classList.toggle(navTogglerOpen);
    navMenu.classList.toggle(navMenuOpen);
    navButton.classList.toggle('fadeIn');
}