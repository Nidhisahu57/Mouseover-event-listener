let btn = document.getElementById("btn");

function magic(){
    document.querySelector("h1").innerHTML = "I am happy to learn with 'PW Skills'.";
    document.querySelector("h1").style.color = "#B46060";
    
};

btn.addEventListener("mouseover", magic);