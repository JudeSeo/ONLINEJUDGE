// 2022-04-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
let temp = 0
while (temp <= input) {
    answer++
    temp = (answer * (answer + 1)) / 2;
}
console.log(answer - 1);