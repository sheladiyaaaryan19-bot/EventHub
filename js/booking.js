const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("🎉 Booking Successful!");

    window.location.href="tickets.html";

});