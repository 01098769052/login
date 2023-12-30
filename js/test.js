var showName = document.getElementById("showName");
var show = []

if(localStorage.getItem("user") != null){
    show = JSON.parse(localStorage.getItem("user"));
    showName.innerHTML = "Welcome "+ show;
}

function logOut(){
    window.location ="./index.html"
}