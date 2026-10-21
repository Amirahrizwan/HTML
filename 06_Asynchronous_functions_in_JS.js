const wait = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

async function runTask() {
  const output = document.getElementById("output");
  output.textContent = "Task is running...";

  try {
    await wait(1500);
    output.textContent = "Task completed! This message appeared after an asynchronous wait.";
  } catch (error) {
    output.textContent = `Something went wrong: ${error.message}`;
  }
}
