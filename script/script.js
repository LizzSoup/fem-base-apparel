var email = document.getElementById("email");
var message = document.getElementById("errorMessage");
var submit = document.getElementById("submitBtn");

function checkEmail() {
  if (!email.checkValidity()) {
    email.classList.add("error");
    message.classList.add("error-message");
    submit.classList.add("submit");
    return false;
  }
};


