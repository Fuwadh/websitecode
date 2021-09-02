var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num3 : ");
if (num1>num2 && num1>num3)
 console.log("large number ="+ num1);
 else if (num2>num1 && num2>num3)
  console.log("large number ="+ num2);
  else
   console.log("large number ="+ num3);
// Vowel / consonant
var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();
if (letter=="a"|| letter=="e"||letter=="i"|| letter=="o"|| letter=="u" )
 console.log("Vowel");
 else
  console.log("consonant");
