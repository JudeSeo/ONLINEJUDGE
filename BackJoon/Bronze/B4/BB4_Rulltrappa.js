// 2022-07-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let stair = input[0].split(" ");
let escal = input[1].split(" ");
let people = input[2].split(" ");
let s = (stair[0] / stair[1]) + (people[1] / escal[1])
let w = (stair[0] / stair[2]) + (people[0] / escal[0])
let answer = s < w ? "latmask" : "friskus"
console.log(answer);
