// Define an empty array to store user-entered numbers
let numbers = [];
let input;

// Use a loop to collect numbers until the user types "done"
while (true) {
  input = prompt("Enter a number (or 'done' to finish):");

  // Stop the loop if the user types "done"
  if (input === null || input.toLowerCase() === "done") {
    break;
  }

  // Convert input to a number and add to the array
  let num = parseFloat(input);

  // Only add valid numbers
  if (!isNaN(num)) {
    numbers.push(num);
  } else {
    alert("Please enter a valid number!");
  }
}

// Prepare an array to store even numbers
let evenNumbers = [];

// Use a for...of loop to extract even numbers
for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

// Display the even numbers on the HTML page
let outputElement = document.getElementById("output");

if (evenNumbers.length > 0) {
  outputElement.innerHTML = `Even Numbers: ${evenNumbers.join(", ")}`;
} else {
  outputElement.innerHTML = "No even numbers were entered.";
}

// Display an end-of-program message
outputElement.innerHTML += "<br><br>End of program.";
