const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    console.log(userName)
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit)