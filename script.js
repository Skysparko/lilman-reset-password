const showPassword = document.getElementById("show-password");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

showPassword.addEventListener("change", () => {
  if (showPassword.checked) {
    password.type = "text";
    confirmPassword.type = "text";
  } else {
    password.type = "password";
    confirmPassword.type = "password";
  }
});
