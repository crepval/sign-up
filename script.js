document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
    } else {
        message.style.color = "green";
        message.textContent = "Signup successful!";
        this.reset(); // Clears the form
    }
});

