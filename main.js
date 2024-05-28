function validatePassword() {
    const password = document.getElementById("newPassword").value;
    const errorMessages = document.getElementById("errorMessages");

    errorMessages.innerHTML = ""; // Clear previous error messages

    if (password.length < 8) {
        errorMessages.innerHTML += "Password must be at least 8 characters long.<br>";
    }
    if (!/[a-z]/.test(password)) {
        errorMessages.innerHTML += "Password must contain at least one lowercase letter.<br>";
    }
    if (!/[A-Z]/.test(password)) {
        errorMessages.innerHTML += "Password must contain at least one uppercase letter.<br>";
    }
    if (!/\d/.test(password)) {
        errorMessages.innerHTML += "Password must contain at least one number.<br>";
    }

    if (errorMessages.innerHTML === "") {
        errorMessages.innerHTML = "Password is acceptable.";
        errorMessages.style.color = "green";
    } else {
        errorMessages.style.color = "red";
    }
}