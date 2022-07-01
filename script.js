// Assignment code here

//Variables for each options the user will choose from. //
var passUppercase = "";
var passLowercase = "";
var passNumerical = "";
var passSpecialcharacters = "";

// Assigning each variable with their corresponding content //
var upper = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var num = "1234567890"
var capital = "!@#$%^&*()_+-=[]{},./?"

//String and Result variables //
var passString = "";
var passResult = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);