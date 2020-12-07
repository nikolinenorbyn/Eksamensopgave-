/*tjekker om min gemte data fra min form er ens med det som bliver 
skrevet i min login-form --> hvis man allerede har en profil */

function check() {
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    var userEmail = document.getElementById('useremail');
    var userPassword = document.getElementById('userpassword');
    
    if 
        (userEmail.value == storedEmail 
        && userPassword == storedPassword) {
        
        alert ("You're logged in!");
        document.getElementById("login-btn").onclick = check(); {
            window.location = "profil.html"
    }} else {
        alert ('Try again please');
    }
}