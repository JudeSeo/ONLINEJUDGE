// 2022-04-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let burger = [input[0], input[1], input[2]];
let drink = [input[3], input[4]];
burger.sort((a, b) => (a - b));
drink.sort((a, b) => (a - b));
answer = Number(burger[0]) + Number(drink[0]) - 50
console.log(answer);