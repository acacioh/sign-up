let password = document.getElementById("ipass");
let lower = document.getElementById("lower");
let upper = document.getElementById("upper");
let num = document.getElementById("num");
let length = document.getElementById("length");
let space = document.getElementById("space");
let spec = document.getElementById("special");
let chars = ["!", "@", "#", "$", "%", "&", "*"];

// When the user clicks on the password field, show the message box
password.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
password.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
password.onkeyup = function () {
  // Validate lowercase
  var lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    lower.classList.remove("invalid");
    lower.classList.add("valid");
  } else {
    lower.classList.remove("valid");
    lower.classList.add("invalid");
  }

  // Validate uppercase
  var upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    upper.classList.remove("invalid");
    upper.classList.add("valid");
  } else {
    upper.classList.remove("valid");
    upper.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    num.classList.remove("invalid");
    num.classList.add("valid");
  } else {
    num.classList.remove("valid");
    num.classList.add("invalid");
  }

  // Validate length
  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // Validate space
  if (password.value.search(" ") != -1) {
    space.classList.remove("valid");
    space.classList.add("invalid");
  } else {
    space.classList.remove("invalid");
    space.classList.add("valid");
  }

  // Validate special characters
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