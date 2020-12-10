

function store() {
    //jeg opstiller en variable for hver form, og giver dem et navn jeg kan kalde
    //opsætter kriterer for informationerne og hvordan de skal udfyldes 
    var username = document.getElementById("username");
    if(username.value.length == " ") {
        alert ('Udfyld venligst et brugernavn')
    }  
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
    
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('gender', gender.value);
        localStorage.setItem('interest', interest.value);
            document.getElementById("regbtn").onclick = store() 
                window.location.href = "../Frontend/profil.html";
            }
        }
    

