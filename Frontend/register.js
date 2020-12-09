    var name = document.getElementById('name');
    var password = document.getElementById('password')
    var birthday = document.getElementById("birthday");
    var email = document.getElementById("email");
    var interest = document.getElementById("interest");
    var gender = document.getElementById("gender");


//jeg opstiller en variable for hver form, og giver dem et navn jeg kan kalde
function store() {
//opsætter kriterer for informationerne og hvordan de skal udfyldes 
    var name = document.getElementById("name");
    if(name.value.length == " ") {
        alert ('Udfyld venligst fornavn og efternavn')
    
    } var password = document.getElementById("password");
    if (password.value == "" || password.value.length < 7) {
        alert("Password skal indeholde 7 karakterer")

    } var birthday = document.getElementById("birthday");
    if(birthday.value == 0){
        alert ('Vælg venligst fødselsdato')
    
    } var email = document.getElementById("email");
    if(email.value.length == " "){
        alert ('Udfyld venligst email')
    
    {
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('gender', gender.value);
        localStorage.setItem('interest', interest.value);
            alert('Your account has been created')
            document.getElementById("regbtn").onclick = store(); {
                location.href = "../Frontend/profil.html";
            }
        }
    }
}
