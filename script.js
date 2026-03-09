const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if(password.length < 6){
    message.textContent = "Password must be at least 6 characters";
    return;
  }

  if(password !== confirmPassword){
    message.textContent = "Passwords do not match";
    return;
  }

  message.style.color = "green";
  message.textContent = "Signup successful!";
});
