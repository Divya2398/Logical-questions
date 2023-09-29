// #Qusetion
// #5. Given an array of numbers, find the maximum and minimum element in the array.
// #Input
// #[54, 546, 548, 60]
// #Output
// #548 54

function findMaxAndMin(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return `${max} ${min}`;
}

// Input array
const inputArray = [54, 546, 548, 60];

// Find the maximum and minimum elements
const result = findMaxAndMin(inputArray);

console.log(result);
