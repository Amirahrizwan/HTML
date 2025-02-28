function showArguments() {
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

showArguments(10, 20, 30, "Hello");

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAll(5, 10, 15, 20));
