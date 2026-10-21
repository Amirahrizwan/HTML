function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}
function runExample() {
  greet("Asha", function(message) {
    document.getElementById("output").textContent = message;
  });
}
