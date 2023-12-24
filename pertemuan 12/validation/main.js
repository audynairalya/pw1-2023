function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const departureTime = document.getElementById("departureTime").value;
    const numTickets = document.getElementById("numTickets").value;

    let isValid = true;

    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(error => error.textContent = "");

    if (!name || name.length > 30) {
        document.getElementById("name").nextElementSibling.textContent = "Name is required and cannot exceed 30 characters.";
        isValid = false;
    }

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("email").nextElementSibling.textContent = "Invalid email format.";
        isValid = false;
    }

    if (!departureTime || !departureTime.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
        document.getElementById("departureTime").nextElementSibling.textContent = "Invalid 24 hour time format.";
        isValid = false;
    }

    if (!numTickets || numTickets < 1 || numTickets > 10) {
        document.getElementById("numTickets").nextElementSibling.textContent = "Number of tickets must be between 1 and 10.";
        isValid = false;
    }

    if (isValid) {

        const formData = `Name: ${name}\nEmail: ${email}\nDeparture Time: ${departureTime}\nNumber of Tickets: ${numTickets}`;
        document.getElementById("formData").textContent = formData;
    }
}