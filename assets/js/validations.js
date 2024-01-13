function validate(){
    var a,b;
    a=document.getElementById("one");
    b=document.getElementById("two");
    
    if(a.value==b.value){
        b.style.borderColor="Green";

    }
    else{
        b.style.borderColor="red";
    }
    
   
}

function pass(){
    var a,str;
    a=document.getElementById("one");
    str=a.value;
    str=str.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    if(str==null){
       a.setCustomValidity("invalid password :-\n* Password must contain 8 or more characters\n* Password must contain atlest one uppercase letter\n* Password must contain atleast one special character");
       a.style.borderColor="red";
        
    }
    else{
        a.setCustomValidity("");
        a.style.borderColor="green";
        
    }

}
