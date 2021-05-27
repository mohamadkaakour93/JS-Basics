var number1 = document.getElementById("first_number");
var number2 = document.getElementById("second_number");

document.getElementById("validate").addEventListener("click", function () { 
    // Then, use the properties of the (already gotten) elment as you need them:
    var number3 = number1.value*number2.value;
    alert(number3);
  })
  
