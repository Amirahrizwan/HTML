async function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const output = document.getElementById("output");
  if (!email) { output.textContent = "Enter an email first."; return; }
  output.textContent = "Checking...";
  try {
    // AbstractAPI's demo endpoint is not used here; this public endpoint checks syntax only.
    const response = await fetch("https://api.eva.pingutil.com/email?email=" + encodeURIComponent(email));
    if (!response.ok) throw new Error("API request failed.");
    const data = await response.json();
    const result = data?.data?.[0];
    output.textContent = result
      ? `API result: ${result.deliverable ? "Likely deliverable" : "May not be deliverable"}; format valid: ${result.valid_syntax}`
      : "No validation result returned. Try again.";
  } catch (error) {
    output.textContent = `Could not contact the API: ${error.message}`;
  }
}
