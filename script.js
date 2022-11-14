// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function for Random Password Generator.
function generatePassword() {
  var newGeneratedPassword = '';

  //Variables for each individual String.
  var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  var specialChar = "!@#$%^&*()_+-=[]{},./?"
  var numbChar = "1234567890";

  // Prompts user for the Length of the password
  var length = window.prompt("Enter Password Length: 8 - 128.");

  return newGeneratedPassword
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);