var fname = document.getElementById("name");
var sname = document.getElementById("surname");
var cit = document.getElementById("city");
document.getElementById("validate").addEventListener("click", function () { 
    // Then, use the properties of the (already gotten) elment as you need them:
    alert('Hello ' + fname.value +" " +sname.value +" "+cit.value);
  })