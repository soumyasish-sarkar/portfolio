document.addEventListener("DOMContentLoaded", () => {
    fetch("blog.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("blog-posts-container");

            if (!Array.isArray(data) || data.length === 0) {
                container.innerHTML = "<p>No blog posts available.</p>";
                return;
            }

            data.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("blog-post");

                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-content">
                        <h3>${post.title}</h3>
                        <div class="date">Posted on: ${post.date}</div>
                        <p>${post.content}</p>
                    </div>
                `;

                container.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error loading blog posts:", error));
});
