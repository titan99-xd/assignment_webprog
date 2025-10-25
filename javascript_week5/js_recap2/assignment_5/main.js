// Function that sorts an array based on the order parameter
function sortArray(numbers, order) {
  // Create a copy of the array to avoid modifying the original
  let sortedArray = [...numbers];

  if (order === "asc") {
    // Sort in ascending order
    sortedArray.sort((a, b) => a - b);
  } else if (order === "desc") {
    // Sort in descending order
    sortedArray.sort((a, b) => b - a);
  } else {
    console.log("Invalid order! Please use 'asc' or 'desc'.");
    return numbers; // Return the original array if order is invalid
  }

  return sortedArray;
}

// Test arrays
const numbers1 = [5, 2, 8, 1, 9];
const numbers2 = [10, 50, 30, 20, 40];

// Test the function
console.log("Original Array 1:", numbers1);
console.log("Ascending:", sortArray(numbers1, "asc"));
console.log("Descending:", sortArray(numbers1, "desc"));

console.log("\nOriginal Array 2:", numbers2);
console.log("Ascending:", sortArray(numbers2, "asc"));
console.log("Descending:", sortArray(numbers2, "desc"));
