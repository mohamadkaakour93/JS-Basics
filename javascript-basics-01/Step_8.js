var user_age = document.getElementById("age");
function myfunction(num){
    var message; 
    if(num >= 18){
        message = "you are over 18";
    }else{
        message = "you are under 18";
    }
    return message;
}
document.getElementById("validate").addEventListener("click", function () { 
    // Then, use the properties of the (already gotten) elment as you need them:
    var b = myfunction(user_age.value);
    alert(b);
  })

