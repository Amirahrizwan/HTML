function greet() {
    console.log("Hello, World!");
}
greet();

function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

const multiply = function (x, y) {
    return x * y;
};
console.log(multiply(4, 3));

const divide = (a, b) => a / b;
console.log(divide(10, 2));

(function () {
    console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();

function userInfo(name, age = 25) {
    return `${name} is ${age} years old.`;
}
console.log(userInfo("Amirah"));

function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));
