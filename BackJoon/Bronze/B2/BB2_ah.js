// 2022-03-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = "";
let jae = input[0].indexOf("h");
let doc = input[1].indexOf("h");
if (jae >= doc)
    answer = "go";
else
    answer = "no"
console.log(answer);