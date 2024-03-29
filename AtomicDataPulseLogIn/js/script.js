document.addEventListener("DOMContentLoaded", function() {
    var registrationForm = document.getElementById("registrationForm");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var errorMessageDiv = document.getElementById('errorMessage');
    
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var username = usernameInput.value.trim();
            var password = passwordInput.value.trim();


            if (username === "" && password === "") {
                showError(usernameInput, "Username is required");
                showError(passwordInput, "Password is required");
                return;
            } else {
                resetStyles(usernameInput);
                resetStyles(passwordInput);
            }

            if (username === "") {
                showError(usernameInput, "Username is required");

                return;
            } else {
                resetStyles(usernameInput);
            }

            if (password === "") {
                showError(passwordInput, "Password is required");

                return;
            } else {
                resetStyles(passwordInput);
            }

            errorMessageDiv.textContent = 'Invalid username or password.';
            errorMessageDiv.classList.add("error");
        });

    } else {
        console.error("Element with ID 'registrationForm' not found.");
    }
});

function showError(inputElement, errorMessage) {
    inputElement.style.border = '1px solid red';
    inputElement.classList.add("error");
    inputElement.setAttribute("placeholder", errorMessage);
}

function resetStyles(inputElement) {
    inputElement.style.border = '1px solid #000000';
    inputElement.classList.remove("error");
    inputElement.removeAttribute("placeholder");
}