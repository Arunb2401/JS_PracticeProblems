var prompt = require('prompt-sync')();

var month = prompt('Enter Month Here: (eg. March)');
var day = prompt('Enter Date Here: (eg. 15)');
if  (month == "March" && day >20 ) {
    console.log("True");
}
else if (month == "May" || month == "April") {
    console.log("True");
}
else if (month == "June" && day <20) {
    console.log("True");
}
else{
    console.log("False");
}