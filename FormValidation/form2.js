let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

//Focus Styling
document.querySelectorAll("input").forEach((input) => {
    input.onfocus = () => input.classList.add("border-green-500");
    input.onblur = () => validateForm(input);
});

function validateForm(input) {
    let value = input.value.trim();
    if (input.id === "username") {
        let pattern = /^[A-Za-z]{3,}$/;
        if (!pattern.test(value)) {
            input.classList.add("border-red-500");
            document.getElementById("userError").innerText = "Only letters, min 3 chars";
        }
        else {
            input.classList.remove("border-red-500");
            document.getElementById("userError").innerText = "✅ Valid";
        }
    }

    if (input.id === "email") {
        let pattern = /^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]{2,}$/;
        if (!pattern.test(value)) {
            input.classList.add("border-red-500");
            document.getElementById("emailError").innerText = "Enter a valid email";
        }
        else {
            input.classList.remove("border-red-500");
            document.getElementById("emailError").innerText = "✅ Valid";
        }
    }
    if (input.id === "phone") {
        let pattern = /^[6-9][0-9]{10}$/;
        if (!pattern.test(value)) {
            input.classList.add("border-red-500");
            document.getElementById("phoneError").innerText = "Enter 10 digit number";
        }
        else {
            input.classList.remove("border-red-500");
            document.getElementById("phoneError").innerText = "✅ Valid";
        }
    }
    if (input.id === "password") {
        let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
        if (!pattern.test(value)) {
            input.classList.add("border-red-500");
            document.getElementById("passError").innerText = "Min 6 chars, 1 upper, 1 lower, 1 digit, 1 special char";
        }
        else {
            input.classList.remove("border-red-500");
            document.getElementById("passError").innerText = "✅ Valid";
        }
    }
    if (input.id === "confirmPassword") {
        if (value === password.value && value !== "") {
            input.classList.remove("border-red-500");
            document.getElementById("confirmError").innerText = "✅ Passwords match";
        }
        else {
            input.classList.add("border-red-500");
            document.getElementById("confirmError").innerText = "❌ Passwords do not match";
        }
    }
}

document.getElementById("myForm").addEventListener("submit", function (e) {
    let errorMessages = [
        "Only letters, min 3 chars",
        "Enter a valid email",
        "Enter 10 digit number",
        "Min 6 chars, 1 upper, 1 lower, 1 digit, 1 special char",
        "❌ Passwords do not match"
    ];

    let hasError = false;

    errorMessages.forEach((msg) => {
        if (document.body.innerText.includes(msg)) {
            hasError = true;
        }
    });

    if (hasError) {
        e.preventDefault();
        alert("Please fix errors before submitting the form.");
    } else {
        alert("Form submitted successfully!");
    }
});
