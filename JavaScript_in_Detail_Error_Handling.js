function divide() {
  try {
    const numerator = 10;
    const denominator = 0;
    if (denominator === 0) throw new Error("Denominator cannot be zero.");
    document.getElementById("output").textContent = numerator / denominator;
  } catch (error) {
    document.getElementById("output").textContent = `Error: ${error.message}`;
  } finally {
    console.log("Division attempt finished.");
  }
}
