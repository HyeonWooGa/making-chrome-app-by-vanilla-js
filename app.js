const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    console.log(userName)
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    console.dir(event);
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);