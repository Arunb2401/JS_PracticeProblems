const prompt = require('prompt-sync')();
const n = parseInt(prompt("Enter the power of 2: "));
var n1 = n;
var i =1;

while(n1 != 256) {
    n1 = Math.pow(2, i);
    i++;
    console.log(n1);
    if(i>n){
        process.exit(0);
    }
}