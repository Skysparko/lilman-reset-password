const { Client, Account, ID } = Appwrite;
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("646f82dc5d2dc807d616"); // Your project ID

const account = new Account(client);
const showPassword = document.getElementById("show-password");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const form = document.getElementById("form");
const submitButton = document.getElementById("submit");

let userId;
let secret;

showPassword.addEventListener("change", () => {
  if (showPassword.checked) {
    password.type = "text";
    confirmPassword.type = "text";
  } else {
    password.type = "password";
    confirmPassword.type = "password";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const url = location.href.split("?")[1].split("&");
  for (let i = 0; i < url.length; i++) {
    if (url[i].split("=")[0] === "userId") {
      userId = url[i].split("=")[1];
    } else if (url[i].split("=")[0] === "secret") {
      secret = url[i].split("=")[1];
    }
  }
});

form.addEventListener("submit", async (e) => {
  try {
    submitButton.textContent = "Submitting...";
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match");
      return;
    }
    console.log(userId, secret, password.value, confirmPassword.value);
    const res = await account.updateRecovery(
      userId,
      secret,
      password.value,
      confirmPassword.value
    );
    submitButton.textContent = "Submit";
    console.log(res);

    location.href = "/completed.html";
  } catch (error) {
    submitButton.textContent = "Submit";

    alert(error);
  }
});
