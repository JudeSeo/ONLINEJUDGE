// 2022-06-09
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let arr = [1, 1, 2];
input = input.slice(1).map(v => Number(v));
let max = Math.max(...input);
for (let i = 3; i <= max; i++) {
    arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1]
}
;
input.forEach(v => {
    answer.push(arr[v])
})
console.log(answer.join("\n"));
