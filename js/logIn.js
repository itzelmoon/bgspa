function checkData(){
    let enterEmail = document.getElementById("correo").value;
    let enterPwd = document.getElementById("contraseña").value;

    //get data from localstorage
    let getEmail = localStorage.getItem("userEmail");
    let getPwd = localStorage.getItem("userPwd");

    if(enterEmail == getEmail){
        if(enterPwd == getPwd){
            alert("Login Successful");

    }else{
        alert("wrong password")
        }
    }else{
        alert("Invalid")
    }

}