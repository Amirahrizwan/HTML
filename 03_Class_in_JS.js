class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

function createStudent() {
  const name = document.getElementById("name").value.trim();
  const age = Number(document.getElementById("age").value);

  if (!name || age < 1) {
    document.getElementById("output").textContent = "Enter a name and a valid age.";
    return;
  }

  const student = new Student(name, age);
  document.getElementById("output").textContent = student.introduce();
}
