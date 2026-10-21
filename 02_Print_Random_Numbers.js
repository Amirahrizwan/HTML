function printRandomNumbers() {
  const countInput = document.getElementById("count");
  const count = Number(countInput.value);
  const output = document.getElementById("output");

  if (!Number.isInteger(count) || count < 1 || count > 50) {
    output.textContent = "Enter a whole number from 1 to 50.";
    return;
  }

  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1); // 1–100
  }
  output.textContent = numbers.join(", ");
}
