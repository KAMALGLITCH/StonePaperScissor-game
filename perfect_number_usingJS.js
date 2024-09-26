const readline = require('readline');

const r1 = readline.createInterface({
input: process.stdin,
output: process.stdout
});

r1.question('Enter a number: ', (answer) => {

let i = 1;
let sum = 0;
while(i <= answer/2) {
    if(answer % i == 0) {
        sum += i;
        }
        i++;
    }
  
    if(sum.toString()===answer) {
        console.log(answer + " is a perfectnumber");
        }
    else {
        console.log(answer + " is not a perfect number");
        }
r1.close();
});