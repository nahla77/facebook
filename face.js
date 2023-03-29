function formValidate(){
    var email =document.getElementById("myEmail").value;
    var password1 =document.getElementById("myPassword").value;
    var error = document.getElementById("error");
    var text='';

    if(email.indexOf("@")==-1 ){
        text ="please enter valid email";
        error.innerHTML =text;
        return false;
    }
    else if(password1.length < 5 ){
        text ="please enter valid password";
        error.innerHTML =text;
        return false;
    }
    else{
        return true;
    }
}