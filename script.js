function generatePassword() {

  var lowerCasedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
  var capitalLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  var numberCharacters = ['1','2','3','4','5','6','7','8','9','0'];
  
  var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','|','/','~','{','}','[',']','?','.',',','`',':',':','>','<'];
  
  var haveLowercase = confirm('Include lowercase characters?');
  
  var haveUppercase = confirm('Include uppercase characters?');
  
  var haveNumbers = confirm('Include numbers?');
  
  var haveSpecialChar = confirm('Include special characters?');
  
  var length = prompt('Please enter the length of the password (8-128 characters):');
  length = parseInt(length);
  
}


