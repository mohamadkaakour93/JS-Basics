
var fname = document.getElementById("name");
document.getElementById("namebutton").addEventListener("click", function () { 
    // Then, use the properties of the (already gotten) elment as you need them:
    alert('Hello ' + fname.value);
  })