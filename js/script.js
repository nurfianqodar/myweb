window.onscroll = function () {
    let header = document.querySelector("header");
    let fixedNav = header.offsetTop;

    console.log(window.pageYOffset);

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

// Button navbar
let menuToggle = document.getElementById("nav-toggle");
let navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("btn-active");
    navMenu.classList.toggle("hidden");
});
