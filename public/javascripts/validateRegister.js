var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var address = document.getElementById("address");
var email = document.getElementById("email");
var organization = document.getElementById("organization");
var date = document.getElementById("date");

function Validate(){
    if(firstName.value==="" || lastName.value==="" || email.value==="" ||
        address.value==="" || organization.value==="" || date.value===""){
        alert("All fields are required.");
        return false;
    }
    else{
        return true;
    }
}