function showTypes() {
  const examples = {
    string: "Hello JavaScript",
    number: 42,
    boolean: true,
    undefinedValue: undefined,
    nullValue: null,
    array: [10, 20, 30],
    object: { name: "Asha", age: 21 }
  };
  const output = Object.entries(examples)
    .map(([key, value]) => `${key}: ${String(value)} (typeof: ${typeof value})`)
    .join("\\n");
  document.getElementById("output").textContent = output;
}
