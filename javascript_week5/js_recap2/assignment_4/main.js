// Function that accepts an array and returns a new sorted array (ascending)
function sortArray(arr) {
  // Return a new array sorted in ascending numerical order
  return [...arr].sort((a, b) => a - b);
}

// Hard-coded array of numbers
let numbers = [42, 7, 19, 73, 5, 28];

// Display the original array
console.log("Original Array:", numbers);

// Call the function and store the sorted result
let sortedNumbers = sortArray(numbers);

// Display the sorted array
console.log("Sorted Array (Ascending):", sortedNumbers);
