document.getElementsByName("button")[0].addEventListener("click", function () { 
if(confirm("Do You Want To Reset The Form?")){
    document.querySelector("#name").value = null;
    document.querySelector("#surname").value = null;
    document.querySelector("#city").value = null;
}


  });