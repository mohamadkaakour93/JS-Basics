var size_shoe = document.getElementById("shoe_size");
var year_birth = document.getElementById("year");
function multiplyNumbers(num){
    x = num*2;
    y = x + 5 ;
    z = y * 50 ;
    a = z - year_birth.value;
    b = a + 1766;
    return b;
}
document.getElementById("validate").addEventListener("click", function () { 
    // Then, use the properties of the (already gotten) elment as you need them:
    var shoe = multiplyNumbers(size_shoe.value);
    alert(shoe);
  })