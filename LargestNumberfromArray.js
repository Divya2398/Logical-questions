// #Question
// # 3. Given an array of numbers, arrange them in a way that it forms the largest value.
// # Input
// # [54, 546, 548, 60]
// # Output
// # 6054854654
// # Note
// # The arrangement 6054854654 gives the largest value.
// # Constraints
// # 1<=N<=1000
// # 1<=Number<=1000000

function largestNumber(arr) {
  // Convert numbers to strings for proper comparison
  const compare = (a, b) => {
    const order1 = a.toString() + b.toString();
    const order2 = b.toString() + a.toString();
    return order2.localeCompare(order1);
  };

  // Sort the array using the custom comparison function
  arr.sort(compare);

  // If the array contains only zeros, return "0"
  if (arr[0] === 0) {
    return "0";
  }

  // Concatenate the sorted array to form the largest number
  return arr.join("");
}

// Input array
const inputArray = [54, 546, 548, 60];

// Find the largest number
const result = largestNumber(inputArray);

console.log(result);
LargeNumberfromArray;
