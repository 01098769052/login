var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPassword =document.getElementById("inputPassword");
var alertTest = document.getElementById("alertTest");
var userInfo = [];

if(localStorage.getItem("users") != null){
    userInfo = JSON.parse(localStorage.getItem("users"));
}

function addUser(){
    if (emailValidation()==true && nameValidation()==true && passwordValidtion()==true){
        
    }
        user ={
            name : inputName.value,
            email :inputEmail.value ,
            password : inputPassword.value
         }
            if( inputName.value=="" || inputEmail.value =="" || inputPassword.value =="" ){
                alertTest.classList.remove("d-none");
                return;
            }
                for( var i=0 ;i < userInfo.length ; i++){
                    if( userInfo[i].email == user.email ){
    
                        alert("alredy used")
                        return  ;                
                    }
               }
            
    
            
          
            userInfo.push( user );
            localStorage.setItem( "users" ,JSON.stringify(userInfo)) ;
            alertTest.classList.add("d-none");
}

function nameValidation(){
    var test1 = inputName.value;
    var regex = /^[a-zA-Z ]{2,30}$/ ;
    if( regex.test(test1) == true){
        // inputName.classList.add("is-valid");
        // inputName.classList.remove("is-invalid");
        return true ;
    }
    else{
        // inputName.classList.add("is-invalid");
        // inputName.classList.remove("is-valid");
        return false ;
    }
}

function emailValidation(){

    var test = inputEmail.value ;
    var regex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if( regex.test(test)==true ){
        // inputEmail.classList.add("is-valid");
        // inputEmail.classList.remove("is-invalid");
         
         return true ;
    }else{
        // inputEmail.classList.add("is-invalid");
        // inputEmail.classList.remove("is-valid");
        return false ;
    }
    
}

function passwordValidtion(){
    var test1 = inputPassword.value ;
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ ;
    if (regex.test(test1)==true){
        // inputPassword.classList.add("is-valid");
        // inputPassword.classList.remove("is-invalid");
        return true ;
    }else{
        // inputPassword.classList.add("is-valid");
        // inputPassword.classList.remove("is-invalid");
        return false ;
    }
}



//^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

// var test = [
//     {name:"ahmed",email:"ahmed@gmail.com",password:"12344"},
//     {name:"mohamed" , email:"mo123@gmail.com",password:"13123"},
//     {name:"ethar" ,email:"ethar@gmail.com",password:"4525"}
// ]
// var user= {
//     name : "mohamed",
//     email:"ahmed@gmail.com",
//     password:1231
// }
// for( var i=0 ; i<test.length ; i++){
//     if(test[i].email != (user.email)){
//         test.push(user)
//         console.log(test);
//     }else{
//         console.log("already used");
//     }
// }











