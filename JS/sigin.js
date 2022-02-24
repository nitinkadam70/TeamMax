
var regdUsers = JSON.parse(localStorage.getItem("userData"));
console.log(regdUsers)

document.getElementById("form").addEventListener("submit", login);


function login(event) {
    event.preventDefault();

    user = document.querySelector("#username").value;
    pass = document.querySelector("#password").value;

    var flag = 0;
    for (var i = 0; i < regdUsers.length; i++) {

        if (regdUsers[i].email == user && regdUsers[i].password == pass) {
            flag = 1;
        }
    }
    if (flag == 1) {
        window.location.href = "index.html";
        alert("login successful");
    }

    else {
        alert("login failed")
    }
}



