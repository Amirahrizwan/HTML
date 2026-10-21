class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  introduce() {
    return `My name is ${this.name}. My grade is ${this.grade}.`;
  }
}
function createStudent() {
  const learner = new Student("Asha", 8);
  document.getElementById("output").textContent = learner.introduce();
}
