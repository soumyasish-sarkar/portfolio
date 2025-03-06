document.addEventListener("DOMContentLoaded", function () {
    const text = "Soumyasish Sarkar";
    const typingElement = document.querySelector(".typing");
    let i = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting && i <= text.length) {
            typingElement.innerHTML = text.substring(0, i)
                .split("")
                .map(letter => `<span class="colored">${letter}</span>`)
                .join(""); 
            i++;
            setTimeout(typeEffect, 150);
        } else if (isDeleting && i >= 0) {
            typingElement.innerHTML = text.substring(0, i)
                .split("")
                .map(letter => `<span class="colored">${letter}</span>`)
                .join(""); 
            i--;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = !isDeleting;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect();
});
