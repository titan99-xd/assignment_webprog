document
  .getElementById("calculateGradeBtn")
  .addEventListener("click", function () {
    // Prompt user for score
    let score = parseFloat(
      prompt("Enter your course assessment score (0–100):")
    );

    // Validate the input
    if (isNaN(score) || score < 0 || score > 100) {
      alert("Please enter a valid score between 0 and 100.");
      return;
    }

    // Determine the grade
    let grade;

    if (score <= 39) {
      grade = 0;
    } else if (score <= 51) {
      grade = 1;
    } else if (score <= 63) {
      grade = 2;
    } else if (score <= 75) {
      grade = 3;
    } else if (score <= 87) {
      grade = 4;
    } else {
      grade = 5;
    }

    // Display result
    document.getElementById(
      "result"
    ).textContent = `Your score is ${score} and your grade is ${grade}.`;
  });
