document.addEventListener("DOMContentLoaded", function () {


    /* MOBILE MENU */

    const menuBtn =
        document.querySelector(".menu-btn");

    const nav =
        document.querySelector(".nav-links");


    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {

            nav.classList.toggle("open");

        });

    }



    /* FAQ ACCORDION */

    const faqButtons =
        document.querySelectorAll(".faq-question");


    faqButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const item =
                button.parentElement;

            item.classList.toggle("open");


            const icon =
                button.querySelector("span");


            if (icon) {

                icon.textContent =
                    item.classList.contains("open")
                    ? "−"
                    : "+";

            }

        });

    });



    /* FAQ SEARCH */

    const faqSearch =
        document.querySelector("#faqSearch");


    if (faqSearch) {

        faqSearch.addEventListener(
            "input",
            function () {

                const search =
                    faqSearch.value.toLowerCase();


                document
                    .querySelectorAll(".faq-item")
                    .forEach(function (item) {

                        const text =
                            item.textContent.toLowerCase();


                        item.style.display =
                            text.includes(search)
                            ? "block"
                            : "none";

                    });

            }
        );

    }



    /* FAQ CATEGORY FILTER */

    document
        .querySelectorAll("[data-filter]")
        .forEach(function (button) {


            button.addEventListener(
                "click",
                function () {


                    document
                        .querySelectorAll("[data-filter]")
                        .forEach(function (btn) {

                            btn.classList.remove("active");

                        });


                    button.classList.add("active");


                    const filter =
                        button.dataset.filter;


                    document
                        .querySelectorAll("[data-category]")
                        .forEach(function (item) {


                            if (
                                filter === "all" ||
                                item.dataset.category === filter
                            ) {

                                item.style.display =
                                    "block";

                            } else {

                                item.style.display =
                                    "none";

                            }

                        });

                }
            );

        });



    /* PORTFOLIO FILTER */

    document
        .querySelectorAll(".portfolio-filter")
        .forEach(function (button) {


            button.addEventListener(
                "click",
                function () {


                    document
                        .querySelectorAll(".portfolio-filter")
                        .forEach(function (btn) {

                            btn.classList.remove("active");

                        });


                    button.classList.add("active");


                    const filter =
                        button.dataset.filter;


                    document
                        .querySelectorAll(".project")
                        .forEach(function (project) {


                            if (
                                filter === "all" ||
                                project.dataset.category === filter
                            ) {

                                project.style.display =
                                    "block";

                            } else {

                                project.style.display =
                                    "none";

                            }

                        });

                }
            );

        });



    /* BLOG SEARCH */

    const blogSearch =
        document.querySelector("#blogSearch");


    if (blogSearch) {

        blogSearch.addEventListener(
            "input",
            function () {


                const search =
                    blogSearch.value.toLowerCase();


                document
                    .querySelectorAll(".article")
                    .forEach(function (article) {


                        const text =
                            article.textContent.toLowerCase();


                        article.style.display =
                            text.includes(search)
                            ? "flex"
                            : "none";

                    });

            }
        );

    }



    /* FORMS */

    document
        .querySelectorAll("form[data-message]")
        .forEach(function (form) {


            form.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    if (!form.checkValidity()) {

                        form.reportValidity();

                        return;

                    }


                    alert(
                        form.dataset.message
                    );


                    form.reset();

                }
            );

        });

});