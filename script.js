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
  var passUppercase = confirm("Add Uppercase characters to your password?");
  var passLowercase = confirm("Add Lowercase characters to your password?");
  var passNumerical = confirm("Add Numbers to your password?");
  var passSpecialcharacters = confirm("Add Special characters to your password?");
  console.log("prompts loaded properly");
  // This will confirm and pass the chosen variables picked by the user to the passString
  if (upper === true || lower === true || numb === true || special === true) {

    if (passUppercase === true) {
      passtring += upper
    }

    if (passLowercase === true) {
      passtring += lower
    }

    if (passNumerical === true) {
      passtring += numb
    }

    if (passSpecialcharacters === true) {
      passtring += special
    }

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);