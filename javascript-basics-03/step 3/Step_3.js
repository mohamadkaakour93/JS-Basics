let text = document.querySelector("#text");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");

green.addEventListener("click", function(){
    text.style.color = "green";

})
red.addEventListener("click", function(){
    text.style.color = "red";

})
blue.addEventListener("click", function(){
    text.style.color = "blue";

})