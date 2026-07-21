// ===============================
// EventHub Events JavaScript
// ===============================

// Search Events
const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    let filter = search.value.toLowerCase();

    let events = document.querySelectorAll(".event");

    events.forEach(function (card) {

        let title = card.querySelector("h2").innerText.toLowerCase();

        if (title.includes(filter)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// Book Now Buttons

const bookButtons = document.querySelectorAll(".book");

bookButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let eventCard = this.parentElement.parentElement;

        let ticket = {

            name: eventCard.querySelector("h2").innerText,
            location: eventCard.querySelectorAll("p")[0].innerText,
            date: eventCard.querySelectorAll("p")[1].innerText,
            price: eventCard.querySelector(".price").innerText

        };

        let tickets =
            JSON.parse(localStorage.getItem("tickets")) || [];

        tickets.push(ticket);

        localStorage.setItem(

            "tickets",

            JSON.stringify(tickets)

        );

        alert("🎉 Ticket Booked Successfully!");

    });

});