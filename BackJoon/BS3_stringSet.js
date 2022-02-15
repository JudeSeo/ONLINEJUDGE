// 2022-02-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let first = input[0].split(" ")[0];
let second = input[0].split(" ")[1];
input = input.slice(1);
let s = input.slice(0, first);
let check = input.slice(first, first + second)
let answer = 0;
s.forEach((v, i) => {
    answer += check.filter((value) => (value == v && value !==undefined)).length
});

console.log(answer);

// 런타임에러로 틀림