document.getElementById("convertBtn").addEventListener("click", function () {
  // Get the Celsius input
  let celsius = parseFloat(document.getElementById("celsiusInput").value);

  // Check if input is valid
  if (isNaN(celsius)) {
    alert("Please enter a valid number for Celsius temperature.");
    return;
  }

  // Convert to Fahrenheit and Kelvin
  let fahrenheit = (celsius * 9) / 5 + 32;
  let kelvin = celsius + 273.15;

  // Display the results
  document.getElementById(
    "fahrenheitOutput"
  ).textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById(
    "kelvinOutput"
  ).textContent = `Temperature in Kelvin: ${kelvin.toFixed(2)} K`;
});
