window.onscroll = function() {scrollFunction()};

const navBar = document.getElementsByClassName("nav-container")[0];
const logo = document.getElementsByClassName("logo")[0];
const home = document.getElementsByClassName("home")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navBar.style.backgroundColor = "#fff";
        navBar.style.paddingBottom = "3rem";
        logo.style.color = "#000";
        home.style.color = "#000";

        Array.from(document.getElementsByClassName("line")).forEach(
            function (e) {
                e.style.backgroundColor = "#000";
            }
        );

        Array.from(document.getElementsByClassName("link")).forEach(
            function (e) {
                if (e.textContent == 'Contáctanos') {
                    e.style.color = "#000";
                    e.style.border = "1px solid #000";
                    e.classList.replace('contact-hover-a', 'contact-hover-b');
                } else {
                    e.style.color = "#000";
                    e.classList.replace('links-hover-a', 'links-hover-b');
                }
            }
        );
        

    } else if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
        navBar.style.backgroundColor = "transparent";
        logo.style.color = "#fff";
        home.style.color = "#fff";

        Array.from(document.getElementsByClassName("line")).forEach(
            function (e) {
                e.style.backgroundColor = "#fff";
            }
        );

        Array.from(document.getElementsByClassName("link")).forEach(
            function (e) {
                if (e.textContent == 'Contáctanos') {
                    e.removeAttribute('style');
                    e.classList.replace('contact-hover-b', 'contact-hover-a');
                } else {
                    e.removeAttribute('style');
                    e.classList.replace('links-hover-b', 'links-hover-a');
                }
            }
        );
    }
}