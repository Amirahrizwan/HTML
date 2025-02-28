let person = {
    name: "Amirah",
    age: 25,
    country: "India",
    profession: "Coding Instructor"
};

console.log(person.name);
console.log(person.age);
console.log(person.country);
console.log(person.profession);

person.age = 26;
console.log(person.age);

person.hobbies = ["Drawing", "Pottery"];
console.log(person.hobbies);

delete person.profession;
console.log(person);
