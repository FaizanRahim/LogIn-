document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }
});
