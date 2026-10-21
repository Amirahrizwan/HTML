const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function runExample() {
  const output = document.getElementById("output");
  output.textContent = "Please wait...";
  try {
    await wait(700);
    output.textContent = "Finished waiting. async/await makes promise-based code easier to read.";
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
}
