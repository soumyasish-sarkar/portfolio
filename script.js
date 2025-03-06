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


// Add smooth transition effect via CSS
const navbar = document.querySelector("nav");
if (navbar) {
  navbar.style.transition = "transform 0.3s ease-in-out";
}

// Form submission with AJAX (Formspree)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Hide the response message initially
        document.getElementById("response-msg").style.display = "none";
        
        // Show sending message during form submission (This will not affect layout)
        const sendingMsg = document.createElement('div');
        sendingMsg.id = "sending-msg";
        sendingMsg.innerHTML = "<p>Sending your message...</p>";
        contactForm.appendChild(sendingMsg);

        const formData = new FormData(this);
        
        fetch("https://formspree.io/f/mnnjevjn", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            // Remove the sending message after successful submission
            document.getElementById("sending-msg").remove();

            if (data.ok) {
                // Show success message
                document.getElementById("response-msg").style.display = "block";
                
                // Reset the form fields
                contactForm.reset();
            } else {
                alert("There was an error. Please try again.");
            }
        })
        .catch(error => {
            alert("Something went wrong. Please try again.");
            document.getElementById("sending-msg").remove();
        });
    });
}



document.getElementById("download-resume").addEventListener("click", function (event) {
    event.preventDefault(); // Stop default link behavior
    const link = document.createElement("a");
    link.href = "soumyasish_resume.pdf"; // Path to the file
    link.setAttribute("download", "soumyasish_resume.pdf"); // Force download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
