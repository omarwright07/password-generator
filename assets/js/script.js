// Assignment code here
var passwordCriteria = {

}
var promptConfirmPassword = false;
var confirmCharacterLimit = 8;
var confirmSpecialCharacters = true;
var confirmUpperCase = true;
var confirmLowerCase = true;



// Object that stores every type of character
var characters = {
  letter: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: " !#$%&()*+,-./:;<=>?@^_`{|}~",
};

// Tools to enforce character limit:
// Math.random;
// Math.max;
// Math.floor;
// [NEW] variable.charAt();
// [NEW] Number();
// [NEW] variable.length

// Function ---------------------------------------
// Below is used to create random variables
var randomNum = function (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var randomCharacter = function (cake) {
  str = cake.charAt(randomNum(0,cake.length));
  return str;
};

// Function ---------------------------------------
// Ask the user for parameters for the function generate Password
var setCharacterLimit = function () {
  confirmCharacterLimit = window.prompt("What's your desired character limit? [ Length of at least 8 characters and no more than 128 characters ]");
  confirmCharacterLimit = Number(confirmCharacterLimit);
  if (typeof confirmCharacterLimit === typeof 0 
  && confirmCharacterLimit >= 8 
  && confirmCharacterLimit <= 128) {
    window.alert("You set the character limit to: " + confirmCharacterLimit);
    // return confirmCharacterLimit; 
  } else {
    window.alert("Please enter a number value between 8 and 128");
    setCharacterLimit();
  }
};

// Tools for displaying info:
// window.prompt("test");
// window.alert("test");
// window.confirm("test");

// Function ---------------------------------------
// Ask the user for parameters for the function generate Password
var promptCriteria = function () {
  promptConfirmPassword = window.confirm("Would you like to generate a password?");
  if (promptConfirmPassword) {
    // #### Need a function to confirm if the Character Limit Input is a number ####
    setCharacterLimit();
    confirmLowerCase = window.confirm("Do you want Lower Case?");
    confirmUpperCase = window.confirm("Do you want Upper Case?");
    confirmNum = window.confirm("Do you want Numbers?");
    confirmSpecialCharacters = window.confirm("Do you want Special Characters?");
    window.alert("Criteria for password set! Generating password now!");
  } else {
  }
};

// Function ---------------------------------------
// Generates the actual password based on parameters generated from the promptCriteria functionand used by the writePassword function
var generatePassword = function () {
  promptCriteria();
  if (promptConfirmPassword) {
    password = "";
    while (password.length < confirmCharacterLimit) {
      switch (randomNum(0,3)) {
        // LowerCase
        case 0:
          password = password + "0";
          window.alert(password);
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
        // #### Just in case the number isn't 0, 1, 2,or 3 ####
        default:
          password = password + "n";
          window.alert(password);
          break;
      }
    }
    window.alert("Final password is: " + password);
    return password;
  } else {
    window.alert("No problem! Maybe next time.");
  }
};

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

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ####################################################
// ####################################################