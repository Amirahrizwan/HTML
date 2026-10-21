function checkNumber() {
  const value = Number(document.getElementById("number").value);
  const output = document.getElementById("output");
  if (document.getElementById("number").value.trim() === "") {
    output.textContent = "Please enter a number.";
  } else if (value > 0) {
    output.textContent = "The number is positive.";
  } else if (value < 0) {
    output.textContent = "The number is negative.";
  } else {
    output.textContent = "The number is zero.";
  }
}
