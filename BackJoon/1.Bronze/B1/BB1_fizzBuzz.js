// 2025-12-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let answer = ""
let i = 0;
input.forEach(v => {
    if (i != 0) i++;
    else if (v != "Fizz" && v != "Buzz" && v != "FizzBuzz") i = Number(v);
})
if (i != 0) {
    i += 1;
    if (i % 5 == 0 && i % 3 == 0) {
        answer = "FizzBuzz";
    } else if (i % 5 == 0) {
        answer = "Buzz";
    } else if (i % 3 == 0) {
        answer = "Fizz";
    } else answer = i;
}
console.log(answer);
