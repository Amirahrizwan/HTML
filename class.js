class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  let person1 = new Person("Ali", 25);
  person1.greet(); // Output: Hi, I'm Ali and I'm 25 years old.
  