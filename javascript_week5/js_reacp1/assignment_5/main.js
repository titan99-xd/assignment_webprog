document
  .getElementById("calculateSumBtn")
  .addEventListener("click", function () {
    // Prompt the user to enter a positive integer
    let n = parseInt(prompt("Enter a positive integer:"));

    // Validate input
    if (isNaN(n) || n <= 0) {
      alert("Please enter a valid positive integer.");
      return;
    }

    // Initialize sum variable
    let sum = 0;

    // Calculate the sum using a for loop
    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    // Display the result on the HTML document
    document.getElementById(
      "result"
    ).textContent = `The sum of all natural numbers up to ${n} is ${sum}.`;
  });
