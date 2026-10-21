document.getElementById("myForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const output = document.getElementById("output");
  if (!name) output.textContent = "Please enter your name.";
  else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) output.textContent = "Please enter a valid email.";
  else output.textContent = `Form submitted. Welcome, ${name}!`;
});
