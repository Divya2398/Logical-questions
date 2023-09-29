// # Qusetion
// # 2. Given a number, check whether it is a prime number or not.
// # Input1 3  Output1 Yes
// # Input 2
// # 4
// # Output 2
// # No

function isPrime(number) {
  // Check if the number is less than 2 (not a prime number)
  if (number < 2) {
    return "No";
  }

  // Iterate from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return "No"; // It's divisible by a number other than 1 and itself
    }
  }

  return "Yes"; // It's a prime number
}

// Input
const inputNumber = 3;

// Check if the number is prime
const result = isPrime(inputNumber);

console.log(result);
