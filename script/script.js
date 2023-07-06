function validateForm() {
    let name = document.forms["contact"]["name"].value;
    let email = document.forms["contact"]["email"].value;
    let interest = document.forms["contact"]["interest"].value
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (email== ""){
        alert("Email must be filled out");
        return false
    }
    else{
        return alert
        ("Name      : "+name+"\n"
        +"Email     : "+email+"\n"
        +"Interest  : "+interest);  
    }
    
}
function openNav() {
    document.getElementById("footer").style.width = "100%";
}
function closeNav() {
    document.getElementById("footer").style.width = "0%";
}