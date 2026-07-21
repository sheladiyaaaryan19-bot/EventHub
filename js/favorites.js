// ===============================
// EventHub Favorites JavaScript
// ===============================

const favoriteContainer = document.getElementById("favoriteContainer");

// Get Favorites
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Empty Favorites
if (favorites.length === 0) {

    favoriteContainer.innerHTML = `
        <div class="empty">
            <h2>No Favorite Events Found ❤️</h2>
            <br>
            <a href="events.html" class="back">Browse Events</a>
        </div>
    `;

}

// Display Favorites
function showFavorites() {

    favoriteContainer.innerHTML = "";

    favorites.forEach(function(event,index){

        favoriteContainer.innerHTML += `

        <div class="card">

            <h2>${event.name}</h2>

            <p>${event.location}</p>

            <p>${event.price}</p>

            <button
            class="remove"
            onclick="removeFavorite(${index})">

            Remove

            </button>

        </div>

        `;

    });

}

showFavorites();

// Remove Favorite
function removeFavorite(index){

    favorites.splice(index,1);

    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );

    location.reload();

}