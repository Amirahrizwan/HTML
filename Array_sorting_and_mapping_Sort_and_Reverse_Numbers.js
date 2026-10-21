function runExample() {
  const numbers = [40, 5, 100, 25, 9];
  const ascending = [...numbers].sort((a, b) => a - b);
  const descending = [...numbers].sort((a, b) => b - a);
  document.getElementById("output").textContent =
    `Original: ${numbers.join(", ")}\\nAscending: ${ascending.join(", ")}\\nDescending: ${descending.join(", ")}`;
}
