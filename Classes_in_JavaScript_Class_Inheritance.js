class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound.`; }
}
class Dog extends Animal {
  speak() { return `${this.name} says woof!`; }
}
function showDetails() {
  const pet = new Dog("Buddy");
  document.getElementById("output").textContent = pet.speak();
}
