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
  var passLength = prompt("Choose the size of your password. (8-128 characters)");
  var passUppercase = confirm("Add Uppercase characters to your Generated password?");
  var passLowercase = confirm("Add Lowercase characters to your Generated password?");
  var passNumerical = confirm("Add Numbers to your Generated password?");
  var passSpecialcharacters = confirm("Add Special characters to your Generated password?");

  // This will confirm and pass the chosen variables picked by the user to the passString
  if (upper === true ||
    lower === true ||
    numb === true ||
    special === true) {

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
  
  // This will make sure the user chooses at least one of the modifiers provided
  if (passUppercase != true &&
    passLowercase != true &&
    passNumerical != true &&
    passSpecialcharacters != true) {
    alert("Please Select one of these modifiers.");
    generatePassword()
  }

  if (passLength <= 7 || passLength >= 129) {
    alert("please choose a size between 8-128.");
    generatePassword()

  } else if (passLength > 7 || passLength < 129) {
    alert("Password Generating");
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);