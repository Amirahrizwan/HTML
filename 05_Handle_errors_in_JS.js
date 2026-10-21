function divideNumbers() {
  const numerator = Number(document.getElementById("numerator").value);
  const denominator = Number(document.getElementById("denominator").value);
  const output = document.getElementById("output");

  try {
    if (denominator === 0) {
      throw new Error("Cannot divide by zero.");
    }
    output.textContent = `Result: ${numerator / denominator}`;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  } finally {
    console.log("Calculation attempt completed.");
  }
}
