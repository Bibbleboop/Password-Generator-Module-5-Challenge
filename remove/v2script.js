// Array of special characters to be included in the password 
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


**************************************


// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);

// Creates a confirm box which takes in true or false for using numbers.
let confirmSelection = confirm(" IMPORTANT INFORMATION ABOUT YOUR PASSWORD          Passwords must contain: at least 1 lower [a-z] and 1 UPPER case letter [A-Z], at least 1 numeric character [0-9] & at least 1 special character. Passwords must be at least 10 characters in length");

// Asks for number of characters required and expects response in numbers.
let confirmCharacters = prompt("How many characters do you require between 10 and 64?");

// Creates a confirm box which takes in true or false for using numbers.
let confirmNumbers = confirm("Will you include Numbers?");

// Creates a confirm box which takes in true or false for using symbols.
let confirmSymbols = confirm("Will you include Symbols?");

// Creates a confirm box which takes in true or false for using uppercase.
let confirmUpper = confirm("Will you include UpperCase?");

// Creates a confirm box which takes in true or false for using lowercase.
let confirmLower = confirm("Will you include LowerCase?");






