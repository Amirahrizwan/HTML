function generateNumbers() {
  const numbers = [];
  let count = 0;
  while (count < 5) {
    numbers.push(Math.floor(Math.random() * 100) + 1); // 1 to 100
    count++;
  }
  document.getElementById("output").textContent = numbers.join(", ");
}
