// Assignment code here

// Prompt for the length of the password min and a max

// Ask and add character types to include in the password

// Ask whether or not to include lowercase, uppercase, mumeric, and/or special characters

// add a confirm/validate for the criteria prompts

var specialCharacters = "terst";
var password = "test";

var generatePassword = function () {
  password = "lsjlkfdjslkfjl";
  return password;
};



var characterLimit = function () {
  
  
};

// tools for displaying info
// window.prompt("test");
// window.alert("test");

// tools enforce character limit
Math.random;
Math.max;
Math.floor;

// loop



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
