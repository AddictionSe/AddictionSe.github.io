function checkPassword() {
    var password = document.getElementById("password").value;

    if (password == "20020801") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("protectedContent").style.display = "block";
    } else {
        alert("Incorrect password!");
    }
}
