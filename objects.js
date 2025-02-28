
let person = {
    name: "Amirah",
    age: 25,
    country: "India",
    hobbies: ["Drawing", "Pottery"],
    greet: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.country);
console.log(person.hobbies[0]);
console.log(person.greet());

person.age = 26;
console.log(person.age);

person.profession = "Coding Instructor";
console.log(person.profession);
