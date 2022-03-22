// Assignment code here
var passwordCriteria = {

}
var confirmCharacterLimit = 8;
var confirmSpecialCharacters = false;
var confirmUpperCase = false;
var confirmLowerCase = false;

// Object that stores every type of character
characters = {
  letters: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: " !#$%&()*+,-./:;<=>?@^_`{|}~",
}

// Function ---------------------------------------
// Below is used to create random variables
var randomNum = function (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomCharacter = function (cake) {
  str = cake.charAt(randomNum(0,cake.length));
  return str;
}

// variable.charAt();


// Tools to enforce character limit:
// Math.random;
// Math.max;
// Math.floor;
// Math.floor(Math.random());

// Function ---------------------------------------
// Ask the user for parameters for the function generate Password
var setCharacterLimit = function () {
  var confirmCharacterLimit = window.prompt("What's your desired character limit? [ Length of at least 8 characters and no more than 128 characters ]");
  if (typeof confirmCharacterLimit === "number" 
  && confirmCharacterLimit > 8 
  && confirmCharacterLimit < 128) {
    return confirmCharacterLimit    
  } else {
    window.alert("Please enter a number value between 8 and 128")
    confirmCharacterLimit();
  }
};


// Tools for displaying info:
// window.prompt("test");
// window.alert("test");
// window.confirm("test");

// Function ---------------------------------------
// Ask the user for parameters for the function generate Password
var promptCriteria = function () {
  var promptConfirmPassword = window.confirm("Would you like to generate a password?");
  if (promptConfirmPassword) {
    // Need a function to confirm if the Character Limit Input is a number
    // confirmCharacterLimit = window.prompt("What's your desired character limit? [ Length of at least 8 characters and no more than 128 characters ]");
    confirmLowerCase = window.confirm("Do you want Lower Case?");
    confirmUpperCase = window.confirm("Do you want Upper Case?");
    confirmNum = window.confirm("Do you want Numbers?");
    confirmSpecialCharacters = window.confirm("Do you want Special Characters?");
    window.alert("Criteria for password set! Generating password now!");
  } else {
    window.alert("No problem! Maybe next time.");
  }
} 

// Function ---------------------------------------
// Generates the actual password based on parameters generated from the promptCriteria function
// Used by the writePassword function
var generatePassword = function () {
  //promptCriteria();
  password = "";
  while (password.length < confirmCharacterLimit) {
    switch (randomNum(0,3)) {
      // LowerCase
      case 0:
        if (confirmLowerCase) {
          password = password + "0";
          window.alert(password);
        } else {
        }
        break;
      // UpperCase
      case 1:
        password = password + "1";
        window.alert(password);
        break;
      // Number
      case 2:
        password = password + "2";
        window.alert(password);
        break;
      // SpecialCharacter
      case 3:
        password = password + "3";
        window.alert(password);
        break;
      default:
        password = password + "n";
        window.alert(password);
        break;
    }
  }
  window.alert(password);
  return password;
};

// for (){
//   password = "";
//   password = password + "0";
//   ret
// }


// loop to generate password
// password = password + 



// ####################################################
// ####################################################

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

// ####################################################
// ####################################################