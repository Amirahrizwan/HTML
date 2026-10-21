function runExample() {
  let score = 10;       // Can be reassigned
  score = score + 5;
  const student = "Asha"; // Cannot be reassigned
  document.getElementById("output").textContent =
    `Student: ${student}\\nScore after update: ${score}`;
}
