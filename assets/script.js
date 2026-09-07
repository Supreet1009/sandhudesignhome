/* =========================================================
   SANDHUDESIGNHOME
   Main Website JavaScript
   ========================================================= */


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuButton = document.querySelector(".menu");
const navigationLinks = document.querySelector(".links");

if (menuButton && navigationLinks) {

    menuButton.addEventListener("click", () => {

        navigationLinks.classList.toggle("open");

        const menuIsOpen = navigationLinks.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

        menuButton.innerHTML = menuIsOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a navigation link */

    navigationLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navigationLinks.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.innerHTML = "☰";

        });

    });

}


/* =========================
   SCROLL REVEAL ANIMATIONS
   ========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/* Fallback for older browsers */

else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================
   CLOSE MOBILE MENU
   WHEN WINDOW IS RESIZED
   ========================= */

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 780 &&
        navigationLinks
    ) {

        navigationLinks.classList.remove("open");

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.innerHTML = "☰";

        }

    }

});