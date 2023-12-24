function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "audynaira" && password === "student-nf23") {
        window.location.href = "success.html";
    } else {
        alert("Invalid username or password");
    }
}

function register() {
    alert("Registration functionality is not yet implemented.");
}