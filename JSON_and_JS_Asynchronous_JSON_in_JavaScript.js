function runExample() {
  const jsonText = '{"name":"Asha","course":"JavaScript","level":1}';
  const student = JSON.parse(jsonText); // JSON string -> object
  student.level = 2;
  const updatedJson = JSON.stringify(student, null, 2); // object -> JSON string
  document.getElementById("output").textContent = updatedJson;
}
