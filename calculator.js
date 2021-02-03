let firstNumber = 7;
let secondNumber = 7;
let operation = "/";

let result;

if (operation === "+") result = firstNumber + secondNumber;
else if (operation === "-") result = firstNumber - secondNumber;
else if (operation === "*") result = firstNumber * secondNumber;
else if (operation === "/") result = firstNumber / secondNumber;
else console.log("Invalid operation!");

console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
