let password = document.getElementById("ipass");
let passwordMessage = document.getElementById("password-message");
let confirmPassword = document.getElementById("icpass");
let confirmPasswordMessage = document.getElementById("password-confirm-message");
let lower = document.getElementById("lower");
let upper = document.getElementById("upper");
let num = document.getElementById("num");
let length = document.getElementById("length");
let space = document.getElementById("space");
let spec = document.getElementById("special");
let chars = ["!", "@", "#", "$", "%", "&", "*"];

password.onfocus = function () {
  passwordMessage.style.display = "block";
  confirmPasswordMessage.style.display = "none";
};

password.onblur = function () {
  passwordMessage.style.display = "none";
};

confirmPassword.onblur = function () {
  confirmPasswordMessage.style.display = "none";
};

password.onkeyup = function () {
  var lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    lower.classList.remove("invalid");
    lower.classList.add("valid");
  } else {
    lower.classList.remove("valid");
    lower.classList.add("invalid");
  }

  var upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    upper.classList.remove("invalid");
    upper.classList.add("valid");
  } else {
    upper.classList.remove("valid");
    upper.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    num.classList.remove("invalid");
    num.classList.add("valid");
  } else {
    num.classList.remove("valid");
    num.classList.add("invalid");
  }

  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  if (password.value.search(" ") != -1) {
    space.classList.remove("valid");
    space.classList.add("invalid");
  } else {
    space.classList.remove("invalid");
    space.classList.add("valid");
  }

  let charflag = false;
  function isspecial(c) {
    if (password.value.includes(c)) charflag = true;
  }
  chars.forEach(isspecial);
  if (charflag) {
    spec.classList.remove("invalid");
    spec.classList.add("valid");
  } else {
    spec.classList.remove("valid");
    spec.classList.add("invalid");
  }
};

document.addEventListener('DOMContentLoaded', function () {

  function validatePassword() {
    var passwordInput = password.value;
    var confirmPasswordInput = confirmPassword.value;

    if (passwordInput === confirmPasswordInput) {
      confirmPasswordMessage.style.display = "none";
    } else {
      confirmPasswordMessage.style.display = "block";
    }
  }

  confirmPassword.addEventListener('focus', validatePassword);
  confirmPassword.addEventListener('input', validatePassword);
});

function validatePasswordOnSubmit() {
  if (!(password.value === confirmPassword.value)) {
    confirmPasswordMessage.style.display = "block";
  }
}
