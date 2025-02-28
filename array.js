let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]);

numbers.push(60);
console.log(numbers);

numbers.pop();
console.log(numbers);

fruits.unshift("Orange");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(numbers.length);

let slicedArray = numbers.slice(1, 3);
console.log(slicedArray);

numbers.splice(2, 1, 35);
console.log(numbers);
