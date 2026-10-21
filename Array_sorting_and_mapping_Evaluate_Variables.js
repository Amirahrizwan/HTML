function calculate() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  document.getElementById("output").textContent =
    `a + b = ${a + b}\\na - b = ${a - b}\\na * b = ${a * b}\\na / b = ${b !== 0 ? a / b : "Cannot divide by zero"}`;
}
