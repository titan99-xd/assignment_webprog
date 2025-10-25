// Create and initialize the fruits array
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Display the contents of the fruits array
console.log("Fruits:", fruits);

// Calculate and display the length of the fruits array
console.log("Length of Fruits:", fruits.length);

// Access and display the element at index 2
console.log("Element at Index 2:", fruits[2]);

// Access and display the last element using the length property
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

// Create an empty array called vegetables
let vegetables = [];

// Prompt the user to enter three vegetables one by one
for (let i = 0; i < 3; i++) {
  let veg = prompt(`Enter vegetable ${i + 1}:`);
  vegetables.push(veg);
}

// Display the contents of the vegetables array
console.log("Vegetables:", vegetables);

// Calculate and display the length of the vegetables array
console.log("Length of Vegetables:", vegetables.length);
