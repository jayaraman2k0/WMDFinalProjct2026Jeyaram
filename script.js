document.addEventListener("DOMContentLoaded", function () {

    /* Mobile menu */

    const menu = document.querySelector(".menu");
    const links = document.querySelector(".navlinks");

    if (menu) {
        menu.addEventListener("click", function () {
            links.classList.toggle("show");
        });
    }


    /* FAQ */

    document.querySelectorAll(".faq-q").forEach(function (question) {

        question.addEventListener("click", function () {

            question.parentElement.classList.toggle("open");

        });

    });


    /* Contact form */

    const form = document.querySelector("#contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const notice = document.querySelector("#formNotice");

            if (notice) {

                notice.textContent =
                    "Thanks! Your message has been received. We will get back to you soon.";

                notice.style.display = "block";

                form.reset();
            }

        });

    }

});