const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItem = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// The classList property allows you to interact with the classes of an HTML element.
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-tab');

            // Hide all contents
            contents.forEach(content => {
                content.classList.remove('active');
            });

            // Show the clicked tab's content
            document.getElementById(target).classList.add('active');
        });
    });

    // Activate the first tab by default
    tabs[0].click();
});

// after hero
document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});