// document.getElementById('myForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     let name = document.getElementById('name');
//     let email = document.getElementById('email');
//     let pwd = document.getElementById('password');
//     let confirmpwd = document.getElementById('confirm-pwd')

//     let namep = document.getElementById('namep');
//     let emailp = document.getElementById('emailp');
//     let pwdp = document.getElementById('pwdp');
//     let confirm_pwd = document.getElementById('confirmpwd');


//     let namePattern = /^[A-Z][a-z]{3,20}$/;
//     if (name.value.trim() === "") {
//         namep.innerText = "Please enter the name";
//         name.classList.add("border-red-500", "focus:ring-red-500");
//     } else if (!namePattern.test(name.value.trim())) {
//         namep.innerText = "Name must start with a capital and have 3-20 letters";
//         name.classList.add("border-red-500", "focus:ring-red-500");
//     } else {
//         namep.innerText = "";
//         name.classList.remove("border-red-500", "focus:ring-red-500");
//     }

//     let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     if (email.value.trim() === "") {
//         emailp.innerText = "Please enter the email";
//         email.classList.add("border-red-500", "focus:ring-red-500");
//     } else if (!emailPattern.test(email.value.trim())) {
//         emailp.innerText = "Enter a valid email";
//         email.classList.add("border-red-500", "focus:ring-red-500");
//     } else {
//         emailp.innerText = "";
//         email.classList.remove("border-red-500", "focus:ring-red-500");
//     }

//     let pwdPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
//     if (pwd.value.trim() === "") {
//         pwdp.innerText = "Please enter the password";
//         pwd.classList.add("border-red-500", "focus:ring-red-500");
//     } else if (!pwdPattern.test(pwd.value.trim())) {
//         pwdp.innerText = "Password must be 6+ chars, include uppercase, lowercase, number & special char";
//         pwd.classList.add("border-red-500", "focus:ring-red-500");
//     } else {
//         pwdp.innerText = "";
//         pwd.classList.remove("border-red-500", "focus:ring-red-500");
//     }

//     if (pwd.value !== confirmpwd.value) {
//         confirm_pwd.innerText = "Passwords do not match";
//         confirmpwd.classList.add("border-red-500", "focus:ring-red-500");
//     } else {
//         confirm_pwd.innerText = "";
//         confirmpwd.classList.remove("border-red-500", "focus:ring-red-500");
//     }
// });

document.getElementById('myForm').addEventListener('submit', function (event) {
    let hasError = false; // track errors

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pwd = document.getElementById('password');
    let confirmpwd = document.getElementById('confirm-pwd');

    let namep = document.getElementById('namep');
    let emailp = document.getElementById('emailp');
    let pwdp = document.getElementById('pwdp');
    let confirm_pwd = document.getElementById('confirmpwd'); // <-- must match your HTML id

    // Name validation
    let namePattern = /^[A-Z][a-z]{3,20}$/;
    if (name.value.trim() === "") {
        namep.innerText = "Please enter the name";
        name.classList.add("border-red-500", "focus:ring-red-500");
        hasError = true;
    } else if (!namePattern.test(name.value.trim())) {
        namep.innerText = "Name must start with a capital and have 3-20 letters";
        name.classList.add("border-red-500", "focus:ring-red-500");
        hasError = true;
    } else {
        namep.innerText = "";
        name.classList.remove("border-red-500", "focus:ring-red-500");
    }

    // Email validation
    let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email.value.trim() === "") {
        emailp.innerText = "Please enter the email";
        email.classList.add("border-red-500", "focus:ring-red-500");
        hasError = true;
    } else if (!emailPattern.test(email.value.trim())) {
        emailp.innerText = "Enter a valid email";
        email.classList.add("border-red-500", "focus:ring-red-500");
        hasError = true;
    } else {
        emailp.innerText = "";
        email.classList.remove("border-red-500", "focus:ring-red-500");
    }

    // Password validation
    let pwdPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
    if (pwd.value.trim() === "") {
        pwdp.innerText = "Please enter the password";
        pwd.classList.add("border-red-500", "focus:ring-red-500");
        hasError = true;
    } else if (!pwdPattern.test(pwd.value.trim())) {
        pwdp.innerText = "Password must be 6+ chars, include uppercase, lowercase, number & special char";
        pwd.classList.add("border-red-500", "focus:ring-red-500");
        hasError = true;
    } else {
        pwdp.innerText = "";
        pwd.classList.remove("border-red-500", "focus:ring-red-500");
    }

    // Confirm Password validation
    if (pwd.value !== confirmpwd.value || confirmpwd.value.trim() === "") {
        confirm_pwd.innerText = "Passwords do not match";
        confirmpwd.classList.add("border-red-500", "focus:ring-red-500");
        hasError = true;
    } else {
        confirm_pwd.innerText = "";
        confirmpwd.classList.remove("border-red-500", "focus:ring-red-500");
    }

    // Prevent submission only if errors exist
    if (hasError) {
        event.preventDefault();
    }
});
