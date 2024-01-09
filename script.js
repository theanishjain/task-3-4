document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateEmail(username.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password.value)) {
      alert(
        "Password must contain an uppercase letter, a number, and no special characters other than @."
      );
      return;
    }

    if (password.value === "SmartServTest@123") {
      window.location.href = "dashboard.html";
    } else {
      alert("Error: Incorrect password. Please try again.");
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(pwd) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{0,}$/;
    return passwordRegex.test(pwd);
  }

});
