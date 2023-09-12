const myForm = document.getElementById("signup");

function validateForm(e) {
    const password = document.getElementById("pwd");
    const confirmPassword = document.getElementById("confirmpwd");

    if (password.value !== confirmPassword.value) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        e.preventDefault();
    }
}

myForm.addEventListener("submit", validateForm);

const pwd = document.getElementById("pwd");
const confirmpwd = document.getElementById("confirmpwd");

function onFocus() {
    const password = document.getElementById("pwd");
    const confirmPassword = document.getElementById("confirmpwd");

    password.classList.remove("error");
    confirmPassword.classList.remove("error"); 
}

pwd.addEventListener("focus", onFocus);
confirmpwd.addEventListener("focus", onFocus);