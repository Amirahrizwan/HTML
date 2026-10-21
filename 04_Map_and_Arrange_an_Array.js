function runExample() {
  const numbers = [8, 3, 12, 5, 1];
  const doubled = numbers.map(number => number * 2);
  const sortedAscending = [...numbers].sort((a, b) => a - b);

  document.getElementById("output").textContent =
    `Original: ${numbers.join(", ")}\\nDoubled using map(): ${doubled.join(", ")}\\nSorted ascending: ${sortedAscending.join(", ")}`;
}
