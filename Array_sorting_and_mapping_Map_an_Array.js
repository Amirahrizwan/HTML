function runExample() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(number => number * 2);
  document.getElementById("output").textContent =
    `Original: ${numbers.join(", ")}\\nDoubled: ${doubled.join(", ")}`;
}
