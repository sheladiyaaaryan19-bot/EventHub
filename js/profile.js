// ===============================
// EventHub Profile JavaScript
// ===============================

// Check Login

const user = JSON.parse(localStorage.getItem("eventhubUser"));
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!user || isLoggedIn !== "true") {

    alert("Please login first.");

    window.location.href = "login.html";

}

// Show User Details

document.getElementById("name").innerText = user.name;

document.getElementById("mobile").innerText = user.mobile;

// Logout

function logout() {

    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        localStorage.removeItem("isLoggedIn");

        alert("Logout Successful.");

        window.location.href = "login.html";

    }

}