const favButtons = document.querySelectorAll(".fav");

favButtons.forEach(button=>{

    button.addEventListener("click",function(){

        const eventCard = this.closest(".event");

        const eventName = eventCard.querySelector("h2").innerText;

        let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

        if(!favorites.some(f => f.name === eventName)){

            const event = {

                name: eventCard.querySelector("h2").innerText,

                location: eventCard.querySelectorAll("p")[0].innerText,

                price: eventCard.querySelector(".price").innerText

            };

            favorites.push(event);

            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );

            alert(eventName + " added to Favorites ❤️");

        }else{

            alert("Already in Favorites");

        }

    });

});