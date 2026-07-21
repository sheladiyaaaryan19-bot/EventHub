// ===============================
// EventHub Login JavaScript
// ===============================

// Get Form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value.trim();

    // Get User Data
    let user = JSON.parse(localStorage.getItem("eventhubUser"));

    // Check User Exists
    if (user == null) {

        alert("No Account Found! Please Sign Up First.");

        window.location.href = "signup.html";

        return;
    }

    // Validate Login
    if (mobile === user.mobile && password === user.password) {

        alert("Login Successful 🎉");

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";

    }

    else {

        alert("Invalid Mobile Number or Password");

    }

});