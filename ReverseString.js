// # question
// # 1. Write a program to print the reverse of the given string.
// # Input
// # codecode
// # Output
// # edocedoc
// # Input Constraints
// # 1<=Length of string<=100
// # Input string contains only lowercase characters ['a' to 'z'].

function reverseString(inputString) {
  let reversed = "";

  // Iterate through the characters of the input string in reverse order
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }

  return reversed;
}

// Input string
const inputString = "codecode";

// Reverse the string
const result = reverseString(inputString);

console.log(result);
