function formValidate(){
    var firstname =document.getElementById("Firstname").value;
    var surname =document.getElementById("Surname").value;
    var email =document.getElementById("Email").value;
    var password =document.getElementById("Password").value;
    var error =document.getElementById("error");
    var text = '';

    if(firstname.length <3){
        text="please enter valid firstname";
        error.innerHTML = text;
        return false;
    }
    else if(surname.length <3){
        text="please enter valid surname";
        error.innerHTML = text;
        return false;
    }
    else if(email.indexOf("@")==-1){
        text="please enter valid email";
        error.innerHTML = text;
        return false;
    }
    else if(password.length<5){
        text="please enter valid password";
        error.innerHTML = text;
        return false;
    }
    else{
        return true;
    }

}   