const prompt = require("prompt-sync")();

const number = parseInt(prompt('Enter number: '));
var num = number;

for(var i = 1; i<number; i++) {
        num = num*i;
}
console.log("Factorial: ", num);