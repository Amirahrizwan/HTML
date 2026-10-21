function fakeTask() {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) resolve("Task completed successfully!");
      else reject(new Error("Task failed."));
    }, 700);
  });
}
function runExample() {
  const output = document.getElementById("output");
  output.textContent = "Working...";
  fakeTask()
    .then(message => { output.textContent = message; })
    .catch(error => { output.textContent = error.message; });
}
