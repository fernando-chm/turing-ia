const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeHamburger = document.querySelector('.close-hamburger');
const body = document.getElementById('body');
const html = document.documentElement;
const contact = document.getElementById('contact');
const siteHeight = screen.height;

hamburger.addEventListener('click', () => {
    navLinks.classList.replace('no-display', 'display-block');
    logo.classList.replace('display-block', 'no-display');
    hamburger.classList.replace('display-block', 'no-display');
    window.scrollTo(0, 0);
    body.style.overflow = 'hidden';
});

closeHamburger.addEventListener('click', () => {
    navLinks.classList.replace('display-block', 'no-display');
    logo.classList.replace('no-display', 'display-block');
    hamburger.classList.replace('no-display', 'display-block');
    body.removeAttribute('style');
});

contact.addEventListener('click', () => {
    navLinks.classList.replace('display-block', 'no-display');
    logo.classList.replace('no-display', 'display-block');
    hamburger.classList.replace('no-display', 'display-block');
    body.removeAttribute('style');
    html.scrollTop = ((siteHeight*12) - (siteHeight/2));
});