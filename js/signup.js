// ===============================
// EventHub Signup JavaScript
// ===============================

// Get Form
const signupForm = document.getElementById("signupForm");

// Form Submit
signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Values
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validation

    if(name === ""){
        alert("Enter Your Name");
        return;
    }

    if(!/^[A-Za-z ]+$/.test(name)){
        alert("Name should contain only letters");
        return;
    }

    if(!/^[0-9]{10}$/.test(mobile)){
        alert("Enter Valid 10 Digit Mobile Number");
        return;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    // User Object
    const user = {

        name: name,

        mobile: mobile,

        password: password

    };

    // Save in Local Storage
    localStorage.setItem("eventhubUser", JSON.stringify(user));

    alert("Account Created Successfully 🎉");

    // Redirect to Login
    window.location.href = "login.html";

});