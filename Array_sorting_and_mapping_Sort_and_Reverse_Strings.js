function runExample() {
  const fruits = ["Mango", "Apple", "Orange", "Banana"];
  const sorted = [...fruits].sort();
  const reversed = [...sorted].reverse();
  document.getElementById("output").textContent =
    `Original: ${fruits.join(", ")}\\nSorted: ${sorted.join(", ")}\\nReversed: ${reversed.join(", ")}`;
}
