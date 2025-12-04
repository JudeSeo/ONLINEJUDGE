// 2024-04-02
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('../../예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let [num, ...people] = input;
let cut = Math.round(num * 0.15);
let sum = 0;
people = people.sort((a, b) => a - b).slice(cut, people.length - cut);
people.forEach(v => sum += v);
let answer = people.length == 0 ? 0 : Math.round(sum / people.length);
console.log(answer);
