document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const ageText = document.getElementById("age").value;
  const age = Number(ageText);
  const output = document.getElementById("output");

  if (!name) {
    output.textContent = "Please enter your name.";
  } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    output.textContent = "Please enter a valid email address.";
  } else if (ageText === "" || !Number.isInteger(age) || age < 1 || age > 120) {
    output.textContent = "Please enter an age from 1 to 120.";
  } else {
    output.textContent = `All inputs are valid. Welcome, ${name}!`;
  }
});
