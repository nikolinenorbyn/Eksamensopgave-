// Delete user function
function deleteUser() {
    if(document.getElementById('deleteuser').clicked == true) {
        window.location.href = "register.html"
        alert ("Din bruger er blevet slettet")
    }
}


//Logud function
function logout() {
    if(document.getElementById('logout').clicked == true) {
        window.location.href = "../Frontend/login.html"
        alert ("Du er nu logget ud")
    }
}

//1. UPDATE USER FUNCTION
function updateUser() {
    document.getElementById("update").onclick = updateUser(); {
        window.location = "../Frontend/opdater.html"
    }    
}

//2. LIKE FUNCTION 

function like() {
    let likebtn = document.getElementById('like-btn');
    let input1 = document.getElementById('input1');
    (likebtn.clicked == input1.value +1)
 }
    // lav if statement sådan da man kommer videre til en anden bruger hvis man har enten liket eller disliket 

//3. DISLIKE FUNCTION 

function dislike() {
    let dislikebtn = document.getElementById('dislike-btn');
    let input2 = document.getElementById('input2');
    (dislikebtn.clicked == input2.value +1)
 }
    

function match() {
    if (document.getElementById('input2', 'input1').value == +1) {
        localStorage.getItem("#disLike", "#like"); 
    } else {

    }
}

