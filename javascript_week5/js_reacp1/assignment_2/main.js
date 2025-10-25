document.getElementById("calculateBtn").addEventListener("click", function () {
  // Option 1: Fewer prompts using split()
  let point1 = prompt(
    "Enter the coordinates of the first point (x1, y1), exapmle- 2,3 separated by a comma:"
  );
  let point2 = prompt(
    "Enter the coordinates of the second point (x2, y2), exapmle- 2,3  separated by a comma:"
  );

  // Split and parse the input
  let [x1, y1] = point1.split(",").map(Number);
  let [x2, y2] = point2.split(",").map(Number);

  // Validate inputs
  if ([x1, y1, x2, y2].some(isNaN)) {
    alert("Please enter valid numbers for both points.");
    return;
  }

  // Calculate the distance
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(
    2
  )} units.`;
});
