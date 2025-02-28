let text = "Hello, World!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.length);
console.log(text.replace("World", "JavaScript"));

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.push(6));
console.log(numbers.pop());
console.log(numbers.shift());
console.log(numbers.unshift(0));
console.log(numbers.slice(1, 3));

let person = {
    name: "Amirah",
    age: 25,
    greet: function () {
        return "Hello, " + this.name;
    }
};
console.log(person.greet());

console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));
console.log(Math.random());
console.log(Math.floor(4.7));
console.log(Math.ceil(4.2));
