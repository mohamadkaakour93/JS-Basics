let pass = document.querySelector("#password");
let conf = document.querySelector("#confirmation");

function match_passwords(){
    if (pass.value != conf.value){
        change_col();
    }
}

function change_col(){
    pass.style.border = "2px solid red";
    conf.style.border = "2px solid red ";
}