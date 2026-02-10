const btn = document.getElementById("btn");
const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");

btn.addEventListener("click", async () => {
    try {
        // Clear previous joke
        setup.innerHTML = "";
        delivery.innerHTML = "";
        delivery.style.display = "none";
        setup.style.display = "none";
        
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        
        if (data.type === "twopart") {
            // Two-part joke
            setup.style.display = "block";
            setup.innerHTML = data.setup;
            
            setTimeout(() => {
                delivery.style.display = "block";
                delivery.innerHTML = data.delivery;
            }, 1500);
        } else {
            // Single joke
            setup.style.display = "block";
            setup.innerHTML = data.joke;
        }
    } catch (error) {
        setup.style.display = "block";
        setup.innerHTML = "Error loading joke. Please try again!";
    }
});



