function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }


   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
   var y = document.getElementById("register");

   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
   }

   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
   }


   document.querySelector(".submit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const usernameInput = document.querySelector(".input-field[type='text']").value;
    const passwordInput = document.querySelector(".input-field[type='password']").value;

    const storedUsername = "Soumyasish_Sarkar";
    const storedHashedPassword = "$2a$10$X9nD3lI8Oqz2zY9cNReknO/Ml7cFSkLXPo/UQ9WfK0QWeAQiAV5QK"; // bcrypt hash of "your_secure_password"

    if (usernameInput !== storedUsername) {
        alert("Wrong username or password!");
        return;
    }

    // Compare entered password with the hashed password
    bcrypt.compare(passwordInput, storedHashedPassword, function(err, result) {
        if (result) {
            // Redirect to dashboard if the password is correct
            window.location.href = "dashboard.html";
        } else {
            alert("Wrong password!");
        }
    });
});
