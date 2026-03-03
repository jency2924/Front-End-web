function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user == "admin" && pass == "1234") {
        alert("Login Successful ✅");
        window.location.href = "landing.html";
    }
    else {
        alert("Wrong Username or Password ❌");
    }
}
function logout() {

    window.location.href = "login.html";
}