// ===========================
// EventHub JavaScript
// ===========================

// Welcome Message
console.log("Welcome to EventHub");

// Current Year
const year = new Date().getFullYear();
console.log("Current Year :", year);

// Explore Button Alert
const exploreBtn = document.querySelector(".btn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        alert("Welcome to EventHub 🎉");
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });
});

// Navbar Shadow
window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }
    else{

        navbar.style.boxShadow = "none";

    }

});

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});