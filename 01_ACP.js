// ACP: Array Copy Practice
function runExample() {
  const original = [10, 20, 30];
  const copy = [...original]; // Creates a shallow copy
  copy.push(40);

  document.getElementById("output").textContent =
    `Original array: ${original.join(", ")}\\nCopied and updated array: ${copy.join(", ")}`;
}
