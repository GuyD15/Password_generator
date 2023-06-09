var lowerCasedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var capitalLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacters = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','|','/','~','{','}','[',']','?','.',',','`',':',':','>','<'];

function generatePassword() {
// confirm functions create a ok or cancel option that displays. the text inside of the function displays above the answer options.
  var haveLowercase = confirm('Include lowercase characters?');
  var haveUppercase = confirm('Include uppercase characters?');
  var haveNumbers = confirm('Include numbers?');
  var haveSpecialChar = confirm('Include special characters?');

  var length = prompt('Please enter the length of the password (8-128 characters):');
  length = parseInt(length);

  // while loop sets for if the input is not a number or the length is less than 8 or if the length is more than 128. Causes the alert and prompt to occur
  while (isNaN(length) || length < 8 || length > 128) {
    alert('Wrong length entered. Please enter a number between 8 and 128.');
    length = prompt('Please enter the length of the password (8-128 characters):');
    // parseInt converts a string into an integer
    length = parseInt(length);
  }
  

// the if else if statements are checking to see if the values are true. When they are true they append to the CharacterOptions string.
  var characterOptions = '';

  if (haveLowercase) {
    characterOptions += lowerCasedLetters;
  } else if (haveUppercase) {
  characterOptions += capitalLetters;
  } else if (haveNumbers) {
  characterOptions += numberCharacters;
  } else if (haveSpecialChar) {
    characterOptions += specialCharacters;
  }
//  an alert displays if there aren't any character types selected.
  if (characterOptions === '') {
    alert('Please select at least one character type must be selected');
    return; 
  }
// selects a random character from characterOptions each time
  var password = '';
  for (var i = 0; i < length; i++) {
    password += getRandomCharacter(characterOptions);
  }
  //accesses the text area above the button using the ID in HMTL. Puts the content from the password value inside of the text area
    var passwordElement = document.getElementById('password');
    passwordElement.textContent = password;
}
// gets the random characters fromt he sets for the password
function getRandomCharacter(charset) {
  var randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}
// attaches the generatePassword function to the button using the id in html
var button = document.getElementById('generate');
generate.addEventListener('click', generatePassword);




