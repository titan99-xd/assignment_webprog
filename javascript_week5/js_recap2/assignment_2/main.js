// Create an empty array called numbers
let numbers = [];

// Prompt the user to enter five numbers and add them using push()
for (let i = 0; i < 5; i++) {
  let num = parseFloat(prompt(`Enter Number ${i + 1}:`));
  numbers.push(num);
}

// Display the contents of the numbers array
console.log("Numbers:", numbers);

// Prompt the user to enter a number to search
let searchNum = parseFloat(prompt("Enter a Number to Search:"));

// Check if the entered number is included in the array
if (numbers.includes(searchNum)) {
  console.log(`Number ${searchNum} is found in the array.`);
} else {
  console.log(`Number ${searchNum} is NOT found in the array.`);
}

// Remove the last number using pop()
numbers.pop();

// Display the updated numbers array
console.log("Updated Numbers:", numbers);

// Sort the numbers array in ascending order
numbers.sort(function (a, b) {
  return a - b; // ensures numerical sorting
});

// Display the sorted numbers array
console.log("Sorted Numbers:", numbers);
