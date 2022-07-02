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
  var get = '';
  //Code for acquiring the size of the password the user decided to go with.
  function getPassword() {
    var passLength = prompt("Choose the size of your password. (8-128 characters)");
    if (parseInt(passLength) >= 8 && parseInt(passLength) <= 128) {
      generatePassword()

      //grabs the length of the password and the string which modifiers were added depending on the users choice.
      for (let i = 0; i < passLength; i++) {
        let x = passString[Math.floor(Math.random() * passString.length)]
        passResult += x;
      }

      //pass the result to the user.
      get = document.createTextNode(passResult);

      //Lets you keep generating new passwords after the first 
      passwordText.innerHTML = '';
      passwordText.appendChild(get);
      passResult = '';
    };

    // This will make sure the user chooses a size between 8 - 128
    if (passLength <= 7 || passLength >= 129) {
      alert("please choose a size between 8-128.");
      generatePassword()

    } else {
      alert("Password Generating");
    }
  }
  getPassword()
}

// Will display the password to the user.
var passwordText = document.querySelector("#password");

// Asks the user to choose the options given to build their random password.
function generatePassword() {
  var passUppercase = confirm("Add Uppercase characters to your Generated password?");
  var passLowercase = confirm("Add Lowercase characters to your Generated password?");
  var passNumerical = confirm("Add Numbers to your Generated password?");
  var passSpecialcharacters = confirm("Add Special characters to your Generated password?");

  // This will confirm and pass the chosen variables picked by the user to the passString
  if (passUppercase === true ||
    passLowercase === true ||
    passNumerical === true ||
    passSpecialcharacters === true) {

    if (passUppercase === true) {
      passString += upper
    }

    if (passLowercase === true) {
      passString += lower
    }

    if (passNumerical === true) {
      passString += numb
    }

    if (passSpecialcharacters === true) {
      passString += special
    }

    // This will make sure the user chooses at least one of the modifiers provided
    if (passUppercase != true &&
      passLowercase != true &&
      passNumerical != true &&
      passSpecialcharacters != true) {
      alert("Please Select one of these modifiers.");
      generatePassword()
    }

  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);