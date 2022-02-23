var userData = JSON.parse(localStorage.getItem("userData")) || [];

document
.querySelector("#form")
.addEventListener("submit",myForm);


function myForm(event){
    event.preventDefault(); 
    var userObj={
       name:document.getElementById("name").value,
       email:document.getElementById("email").value,
       password:document.getElementById("password").value,
    }
    console.log(userObj)

    userData.push(userObj);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "sigin.html";
}
    
 