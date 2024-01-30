// 2022-04-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let n = input[1].split(" ");
let m = input[3].split(" ");
let result = {};
n.sort((a, b) => (a - b)).forEach((x) => {
    result[x] = (result[x] || 0) + 1;
});
let answer = new Array(m.length).fill(0);
m.forEach((v, i) => {
    answer[i] = result[v] == undefined ? 0 : result[v];
});
console.log(answer.join(" "));