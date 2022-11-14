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
  var passLength = window.prompt("Enter Password Length: 8 - 128.");

  //Converting passLength to a numerical value.
  passLength = Number(passLength);

  // Prompts user if password is empty.
  if (passLength === "" || passLength === null) {
    alert(" Please provide a valid answer!")
    return newGeneratedPassword
  } // Prompts user when number is out of range provided.
  else if (passLength < 8 || passLength > 128) {
    alert('Enter a valid number between 8-128')
  } else if (isNaN(passLength)) {
    alert('Numbers Only');
  } else {
    var upperCaseConfirm = confirm('Confirm to add uppercase characters to password'); // Prompts user for uppercase confirmation.
    var lowerCaseConfirm = confirm('Confirm to add lowercase characters to password'); // Prompts user for lowercase confirmation.
    var specialCaseConfirm = confirm('Confirm to add special characters to password'); // Prompts user for special character confirmation.
    var numbCaseConfirm = confirm('Confirm to add number characters to password'); // Prompts user for number confirmation.
  } //Prompts user to select one of the four options to better randomize password.
  if (!upperCaseConfirm && !lowerCaseConfirm && !specialCaseConfirm && !numbCaseConfirm) {
    alert("One type of character must be chosen.")
  }

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