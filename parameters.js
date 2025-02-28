function greet(name) {
    console.log("Hello, " + name);
}
greet("Amirah");

function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

function userInfo(name, age = 25) {
    return `${name} is ${age} years old.`;
}
console.log(userInfo("Amirah"));
console.log(userInfo("John", 30));

function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 4));
