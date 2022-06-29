var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numeric = "numeric"
var special = "!@#$%^&*()_+-=[]{},./?";
var passString = "";
var passResult = "";

var textArea = document.getElementById("password");

function characterTypes() {
    var passwordCapital = confirm("would you like to include uppercase letters?");
    var passwordLowercase = confirm("would you like to include lowercase letters?");
    var passwordNumeric = confirm("would you like to include numbers?");
    var passwordSpecial = confirm("would you like to include special characters?");
    if (passwordCapital === true || passwordLowercase === true ||
        passwordNumeric === true || passwordSpecial === true) {

        if (passwordCapital === true) {
            passString += capital
        }

        if (passwordLowercase === true) {
            passString += lower
        }
        if (passwordNumeric === true) {
            passString += numeric
        }
        if (passwordSpecial === true) {
            passString += special
        }
    } else {
        alert("Please choose at least one character type.")
        characterTypes()
    };
}