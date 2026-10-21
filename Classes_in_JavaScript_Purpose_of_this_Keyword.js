const student = {
  name: "Asha",
  course: "JavaScript",
  describe() {
    return `${this.name} is learning ${this.course}.`;
  }
};
function showStudent() {
  document.getElementById("output").textContent = student.describe();
}
