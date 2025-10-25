document
  .getElementById("generateTableBtn")
  .addEventListener("click", function () {
    // Prompt user for a positive integer
    let n = parseInt(prompt("Enter a positive integer:"));

    // Validate input
    if (isNaN(n) || n <= 0) {
      alert("Please enter a valid positive integer.");
      return;
    }

    // Prepare an HTML table string
    let tableHTML = "<table><tr><th>*</th>";

    // Create header row
    for (let i = 1; i <= n; i++) {
      tableHTML += `<th>${i}</th>`;
    }
    tableHTML += "</tr>";

    // Generate multiplication table using nested loops
    for (let row = 1; row <= n; row++) {
      tableHTML += `<tr><th>${row}</th>`;
      for (let col = 1; col <= n; col++) {
        let product = row * col;
        tableHTML += `<td>${product}</td>`;
      }
      tableHTML += "</tr>";
    }

    tableHTML += "</table>";

    // Display the table on the HTML document
    document.getElementById("tableContainer").innerHTML = tableHTML;
  });
