// 2022-08-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let people = input[0].split(" ")
let [x, y, r] = input[1].split(" ")
people.forEach((v, i) => {
    if (v == x)
        answer = i + 1
})
console.log(answer);