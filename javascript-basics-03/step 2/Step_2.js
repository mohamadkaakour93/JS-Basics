let sho = document.querySelector("#show");
let hi = document.querySelector("#hide");
let text = document.querySelector("#texte");
function show_hide(){
    sho.addEventListener("click", function(){
        text.style.display = "block";

    })
    hi.addEventListener("click",function(){
        text.style.display = "none";
    })
}
