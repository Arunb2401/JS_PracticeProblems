var i=1;
var max = 0;
var min= 0;
const COUNT = 5;
while(i <= COUNT){
let n = Math.floor(Math.random()*900)+100;
console.log(n);
if ( i == 1 ){
    max = n;
    min = n;
}
if (n < min ){
    min = n;
}
else if (n > max){
    max = n;
}
i++;
}
console.log("Maximum Value : " + max + " | Minimum Value : " + min);