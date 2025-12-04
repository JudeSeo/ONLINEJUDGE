// 2022-03-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
const result = {};
input.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
});
let arr = Object.entries(result);
let max = Math.max(...Object.values(result));
let answer = arr.filter((v, i) => (v[1] == max)).sort()[0];
console.log(answer[0]);