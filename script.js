document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Check local storage for mode preference
    let isLightMode = localStorage.getItem("lightMode") === "true";

    // Apply the saved mode
    if (isLightMode) {
        document.body.classList.add("light-mode");
        themeToggle.checked = true;
    }

    // Event listener for toggle switch
    themeToggle.addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("light-mode"); // Switch to light mode
            localStorage.setItem("lightMode", "true");
        } else {
            document.body.classList.remove("light-mode"); // Switch to dark mode
            localStorage.setItem("lightMode", "false");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Soumyasish Sarkar";
    const typingElement = document.querySelector(".typing");
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
let lastScrollTop = 0;
const navbar = document.querySelector("nav");
const threshold = 100; // Adjust this threshold as needed

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > threshold) {
        navbar.style.transform = "translateY(-100%)"; // Hide navbar
    } else {
        navbar.style.transform = "translateY(0)"; // Show navbar when reaching near top
    }

    lastScrollTop = scrollTop;
});

// Add smooth transition effect via CSS
navbar.style.transition = "transform 0.3s ease-in-out";
