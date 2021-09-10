const prompt = require('prompt-sync')();
var n = parseInt(prompt("Enter the power of 2: "));

for(var i = 0; i<=n;i++) {
    console.log(Math.pow(2,i));
}