function runExample() {
  const textNumber = "123";
  const number = Number(textNumber);
  const numberText = String(number);
  const truthy = Boolean("hello");
  document.getElementById("output").textContent =
    `Original: "${textNumber}" (${typeof textNumber})\\nNumber(): ${number} (${typeof number})\\nString(): "${numberText}" (${typeof numberText})\\nBoolean("hello"): ${truthy}`;
}
