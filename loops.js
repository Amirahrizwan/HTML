for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

let numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
    console.log(num);
}

let person = { name: "Amirah", age: 25, country: "India" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

numbers.forEach(function (num) {
    console.log(num);
});
