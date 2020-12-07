// Delete user function
function deleteUser() {
    deleteuser = localStorage.getItem('deleteUser')
    alert ("Bruger er slettet")
    location.href = "./register.html"
}


//Logud function
function logout() {
    window.localStorage.clear();
    location.href = "./login.html"
    alert ("Du er nu logget ud")
}

//1. UPDATE USER FUNCTION
function updateUser() {
    document.getElementById("update-btn").onclick = updateUser(); {
        window.location = "profil.html"
    }    
}

//2. LIKE FUNCTION 

function like() {
    let likebtn = document.querySelector('#like-btn');

    let input1 = document.querySelector('#input1');
    
    likebtn.addEventListener('click', () => {
        input1.value = parseInt(input1.value) +1;
    })
    // lav if statement sådan da man kommer videre til en anden bruger hvis man har enten liket eller disliket 
}

//3. DISLIKE FUNCTION 

function dislike() {
    let dislikebtn = document.querySelector('#dislike-btn');

    let input2 = document.querySelector('#input2');

    dislikebtn.addEventListener('click', () => {
        input2.value = parseInt(input2.value) 1;
    })
}

function next() {
    if (document.getElementById('input2', 'input1').value == +1) {
        localStorage.getItem("#disLike", "#like"); 
    } else {

    }
}

