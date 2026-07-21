// ===============================
// EventHub Tickets JavaScript
// ===============================

const ticketContainer = document.getElementById("ticketContainer");

// Get Tickets
let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

// Show Empty Message
if (tickets.length === 0) {

    ticketContainer.innerHTML = `
        <div class="empty">
            <h2>No Tickets Booked Yet 🎟</h2>
            <br>
            <a href="events.html" class="back">Book an Event</a>
        </div>
    `;

} else {

    showTickets();

}

// Display Tickets
function showTickets() {

    ticketContainer.innerHTML = "";

    tickets.forEach(function(ticket, index){

        ticketContainer.innerHTML += `

        <div class="ticket">

            <h2>${ticket.name}</h2>

            <p><strong>Location:</strong> ${ticket.location}</p>

            <p><strong>Date:</strong> ${ticket.date}</p>

            <p><strong>Price:</strong> ${ticket.price}</p>

            <button
            class="cancel"
            onclick="cancelTicket(${index})">

            Cancel Ticket

            </button>

        </div>

        `;

    });

}

// Cancel Ticket
function cancelTicket(index){

    if(confirm("Are you sure you want to cancel this ticket?")){

        tickets.splice(index,1);

        localStorage.setItem(

            "tickets",

            JSON.stringify(tickets)

        );

        location.reload();

    }

}