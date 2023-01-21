// Selectors

const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');


// EventListener
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.className.includes('nav-menu--active')) {
        closeHamburger()
    }
})

hamburger.addEventListener('click', () => {
    navMenu.classList.add('nav-menu--active')
})

hamburgerClose.addEventListener('click', closeHamburger)

// Functions
function closeHamburger() {
    navMenu.classList.remove('nav-menu--active')
}