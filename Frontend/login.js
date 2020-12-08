/*tjekker om min gemte data fra min form er ens med det som bliver 
skrevet i min login-form --> hvis man allerede har en profil */


function check() {
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    var Email = Email;
    var Password = Password;
    
    if 
        (Email.value == storedEmail && Password == storedPassword) {
        
        alert ("You're logged in!");
        document.getElementById("login-btn").onclick = check(); {
            window.location = "../Frontend/profil.html"
    }} else {
        alert ('Try again please');
    }
}

