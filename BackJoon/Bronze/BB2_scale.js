// 2022-03-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let asc = input.slice(0);
let desc = input.slice(0);
asc.sort((a, b) => (a - b));
desc.sort((a, b) => (b - a));
let answer = "mixed";
if (JSON.stringify(asc) == JSON.stringify(input))
    answer = "ascending";
else if (JSON.stringify(desc) == JSON.stringify(input))
    answer = "descending";
console.log(answer);