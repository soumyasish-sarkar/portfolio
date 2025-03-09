document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("projects-posts-container");

            if (!Array.isArray(data) || data.length === 0) {
                container.innerHTML = "<p>No projects available.</p>";
                return;
            }

            data.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("projects-post");

                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="projects-content">
                        <h3>${post.title}</h3>
                        <div class="date">Posted on: ${post.date}</div>
                        <p>${post.content}</p>
                    </div>
                `;

                // Ensure the project has a valid link before adding event listener
                if (post.link) {
                    postElement.addEventListener("click", () => {
                        window.location.href = post.link; // Navigate to project link
                    });
                }

                container.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error loading projects posts:", error));
});
