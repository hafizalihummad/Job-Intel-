var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function formValidation()
{
// var uid = document.registration.userid;
// var passid = document.registration.passid;
var uname = document.registration.username;
// var uadd = document.registration.address;
// var ucountry = document.registration.country;
// var uzip = document.registration.zip;
var uemail = document.registration.uemail;
// var uage = document.registration.uage;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(allLetter(uname))
{
//if(alphanumeric(uadd))
//{ 
//if(countryselect(ucountry))
//{
//if(allnumeric(uzip))
//{
if(ValidateEmail(uemail))
{
if(passid_validation(passid,7,12))
{
if(validsex(umsex,ufsex))
{
}
} 
}
//} 
//}
//}
}
}
return false;
}
