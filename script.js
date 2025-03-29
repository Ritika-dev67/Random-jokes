let set = document.getElementById("setup");
let delivery = document.getElementById("del");
let btn = document.getElementById("btn");

let url = "https://v2.jokeapi.dev/joke/Any";
btn.addEventListener("click",()=>{
   const trial=async()=>{
        let promise = await fetch(url);
        let data =await promise.json();
        set.innerHTML=data.setup;
        setTimeout(() => {
            delivery.innerHTML =data.delivery;
        }, 2000);
        
       reset; 
    }   
   trial();
})




