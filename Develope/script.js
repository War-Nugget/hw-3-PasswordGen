// Assignment Code
var userInput;
var confirmNumber;
var confirmSpecials;
var confirmUpper;
var confirmLower;
var choices;


var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var toUpper = function(x){
  return x.toUpperCase();
};
var upperLetters = lowerLetters.map(toUpper);

var space = [];


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
  ps = generatePassword();
  document.getElementById("password").placeholer = ps;
});
// Write password to the #password input
function generatePassword() {
  //User input for how many characters
  userInput = parseInt(prompt("How many characters would you like your password length? Enter between 8 and 128"));

  if(!userInput){
    alert("You must enter a number.");
  }
  else if (enter < 8 || enter > 128){
    alert("You must enter a number between 8 and 100.")
  }
  else {
    confirmNumber = confirm("Do you want numbers?");
    confirmSpecials = confirm("Do you want special characters");
    confirmUpper = confirm("Do you want uppercase letters?");
    confirmLower = confirm("Do you want lowercase letters?");
  };
  // If all inputs are negative
  if (!confirmLower && !confirmNumber && !confirmSpecials && !confirmUpper){
    choices = alert("You must choose at least one of the criteria.")
  }

  else if (confirmLower && confirmNumber && confirmSpecials && confirmUpper){
    choices = upperLetters.concat(numbers, specialCharacters, lowerLetters);
  }
//For 3 positive options 

 else if (confirmNumber && confirmSpecials && confirmUpper){
   choices = numbers.concat(specialCharacters, upperLetters);
 }
 else if (confirmNumber && confirmSpecials && confirmLower){
   choices = numbers.concat(specialCharacters, lowerLetters);
 }
 else if (confirmNumber && confirmUpper && confirmLower){
  choices = numbers.concat(specialCharacters, lowerLetters);
}
else if (confirmUpper && confirmSpecials && confirmLower){
  choices = numbers.concat(specialCharacters, lowerLetters);
}

//For 2 Positive options 
else if (confirmNumber && confirmSpecials){
  choices = numbers.concat(specialCharacters);
}
else if (confirmNumber && confirmUpper){
  choices = numbers.concat(upperLetters);

}else if (confirmNumber && confirmLower){
  choices = numbers.concat(lowerLetters);

}else if (confirmUpper && confirmSpecials){
  choices = upperLetters.concat(specialCharacters);

}else if (confirmUpper && confirmLower){
  choices = upperLetters.concat(lowerLetters);

}else if (confirmLower && confirmSpecials){
  choices = lowerLetters.concat(specialCharacters);
}

//For 1 positive
else if (confirmNumber){
  choices = numbers;
}
else if (confirmLower){
  choices = lowerLetters;

}else if (confirmUpper){
  choices = upperLetters;

}else if (confirmSpecials){
  choices = specialCharacters;
};
var password = [];

for (var i = 0; i < userInput; i++){
  var picks = choices[Math.floor(Math.random() * choices.length)];
  password.push(picks);
}

var ps = password.join("");
userInput(ps);
return ps;

  //var password = generatePassword();
 // var passwordText = document.querySelector("#password");

 // passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
