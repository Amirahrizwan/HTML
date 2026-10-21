function runExample() {
  const sentence = "I like Java. Java is fun.";
  const foundAt = sentence.indexOf("Java");
  const replacedFirst = sentence.replace("Java", "JavaScript");
  const replacedAll = sentence.replaceAll("Java", "JavaScript");
  document.getElementById("output").textContent =
    `Sentence: ${sentence}\\nFirst match index: ${foundAt}\\nReplace first: ${replacedFirst}\\nReplace all: ${replacedAll}`;
}
