var name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var gender = document.getElementById('gender');
var interest = document.getElementById('interest');

function createUser() {
    var user = {
        name = name.value,
        email = email.value,
        password = password.value,
        gender = gender.value,
        interest = interest.value
    }
}

console.log(user);



//----------------------- ELLER ---------------------------




//jeg opstiller en variable for hver form, og giver dem et navn jeg kan kalde
function store() {
    var name = document.getElementById('name');
    var password = document.getElementById('password')
    var birthday = document.getElementById("birthday");
    var email = document.getElementById("email");
    var interest = document.getElementById("interest");
    var gender = document.getElementById("gender").required;

//opsætter kriterer for informationerne og hvordan de skal udfyldes 
    if(name.value.length == " ") {
        alert ('Udfyld venligst fornavn og efternavn')
    
    }else if(password.value.length == " "){
        alert ('Udfyldt venligst password')

    }else if(password.value.length < 7){
        alert ('Password skal være mindst 7 karakterer langt')
    
    }else if(birthday.value == 0){
        alert ('Vælg venligst fødselsdato')
    
    }else if(email.value.length == " "){
        alert ('Udfyld venligst email')
    
    }else if (document.getElementsByName('gender')[0].value == '' ){
        alert('Vælg dit køn');

    }else if (document.getElementsByName('interest')[0].value == '' ){
        alert ('Vælg interesse')
    
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('gender', gender1.value, gender2.value, gender3.value);
        localStorage.setItem('interest', interest1.value, interest2.value, interst3.value, interest4.value);
            alert('Your account has been created')
            document.getElementById("reg-btn").onclick = store() {
                location.href = 
}}


