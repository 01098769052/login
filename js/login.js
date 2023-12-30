var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var loginMessage = document.getElementById("loginMessage");
var wrongPass = document.getElementById("wrongPass")
var userInfo = []; 

if(localStorage.getItem("users") != null){
    userInfo = JSON.parse(localStorage.getItem("users"));
}

function testEmail(){
    user = {
        email : inputEmail.value ,
        password : inputPassword.value
    }
    for( var i = 0 ; i < userInfo.length ; i++ ){
        if(userInfo[i].email == user.email && userInfo[i].password == user.password){
            // console.log("valid user");
            // loginMessage.classList.remove("d-none");
            localStorage.setItem( "user" , JSON.stringify(userInfo[i].name));
            window.location=  "./home.html"
            return ;
        }else{
            wrongPass.classList.remove("d-none");
        }
    }
    
}