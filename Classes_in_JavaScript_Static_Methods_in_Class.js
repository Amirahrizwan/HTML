class MathHelper {
  static square(number) {
    return number * number;
  }
}
function showResult() {
  document.getElementById("output").textContent =
    `Square of 6 = ${MathHelper.square(6)}`;
}
