function calculate() {
  const aText = document.getElementById("a").value;
  const bText = document.getElementById("b").value;
  const a = Number(aText), b = Number(bText);
  const operation = document.getElementById("operation").value;
  const output = document.getElementById("output");
  if (aText === "" || bText === "") { output.textContent = "Enter both numbers."; return; }
  let result;
  switch (operation) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/":
      if (b === 0) { output.textContent = "Cannot divide by zero."; return; }
      result = a / b; break;
  }
  output.textContent = `Result: ${result}`;
}
