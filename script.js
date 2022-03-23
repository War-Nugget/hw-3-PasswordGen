// Assignment Variables============================
var userInput;
var confirmNumber;
var confirmSpecials;
var confirmUpper;
var confirmLower;
var choices;

//Arrays=======================================
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Displays lowercase letters array to uppercase ==================================
var toUpper = function(x){
  return x.toUpperCase();
};
var upperLetters = lowerLetters.map(toUpper);

var space = [];

//Generate password function============================
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function(){
  ps = generatePassword();
  document.getElementById("password").placeholer = ps;
});
// Rest of code is to generate password and to ask for criteria======================================
function generatePassword() 
{
    //User input for how many characters
    userInput = parseInt(prompt("How many characters would you like your password length? Enter between 8 and 128"));

    if(!userInput){
      alert("You must enter a number.");
    }
    else if (userInput < 8 || userInput > 128){
      alert("You must enter a number between 8 and 128.")
    }
    else {
      confirmNumber = confirm("Do you want numbers?");
      confirmSpecials = confirm("Do you want special characters?");
      confirmUpper = confirm("Do you want Uppercase?");
      confirmLower = confirm("Do you want Lowercase?");
    };
    // If all inputs are negative ==============================================  
    if (!confirmLower && !confirmNumber && !confirmSpecials && !confirmUpper){
      choices = alert("You must choose at least one of the criteria.")
      return generatePassword;
    }
  // If all inputs are true ==============================================
    else if (confirmLower && confirmNumber && confirmSpecials && confirmUpper){
      choices = upperLetters.concat(numbers, specialCharacters, lowerLetters);
    }
  //For 3 positive options ==============================================

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

  //For 2 Positive options ==============================================
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

  //For 1 positive ==============================================
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

  //Randomization of the password ==============================================
  for (var i = 0; i < userInput; i++){
    var picks = choices[Math.floor(Math.random() * choices.length)];
    password.push(picks);
  }
  //Combines the password into a string (Thanks google) ==============================================
  var ps = password.join("");
  UserInput(ps);
  return ps;

  //Adds the password to the box ==============================================

  function UserInput(ps){
    document.getElementById("password").textContent = ps;
  }

}