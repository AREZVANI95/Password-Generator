// Assignment code here

//Variables for each options the user will choose from. 
var passUppercase = "";
var passLowercase = "";
var passNumerical = "";
var passSpecialcharacters = "";

// Assigning each variable with their corresponding content 
var upper = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numb = "1234567890"
var special = "!@#$%^&*()_+-=[]{},./?"

//String and Result variables 
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

// Asks the user to choose the options given to build their random password.
function generatePassword() {
  var upper = confirm("Add Uppercase characters to your password?");
  var lower = confirm("Add Lowercase characters to your password?");
  var numb = confirm("Add Numbers to your password?");
  var special = confirm("Add Special characters to your password?");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);