document
  .getElementById("checkTriangleBtn")
  .addEventListener("click", function () {
    // Prompt user for the sides
    let a = parseFloat(prompt("Enter the length of side a:"));
    let b = parseFloat(prompt("Enter the length of side b:"));
    let c = parseFloat(prompt("Enter the length of side c:"));

    // Check if all inputs are valid
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
      alert("Please enter valid positive numbers for all sides.");
      return;
    }

    // Check if a triangle can be formed
    if (!(a + b > c && a + c > b && b + c > a)) {
      document.getElementById("result").textContent =
        "The given sides do not form a valid triangle.";
      return;
    }

    // Determine triangle type using logical operators
    let resultText = "";
    if (a === b && b === c) {
      resultText = "This is an Equilateral Triangle (all sides are equal).";
    } else if (
      (a === b && b !== c) ||
      (a === c && c !== b) ||
      (b === c && c !== a)
    ) {
      resultText = "This is an Isosceles Triangle (two sides are equal).";
    } else if (a !== b && b !== c && a !== c) {
      resultText = "This is a Scalene Triangle (no sides are equal).";
    }

    // Display result
    document.getElementById("result").textContent = resultText;
  });
