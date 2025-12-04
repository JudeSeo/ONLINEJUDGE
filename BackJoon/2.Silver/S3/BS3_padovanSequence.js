// 2022-04-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [1, 1, 1];
input = input.slice(1);
let max = Math.max(...input);
for (let i = 0; i < max; i++) {
    answer[i + 3] = answer[i] + answer[i + 1];
}
input.forEach((v, i) => {
    console.log(answer[v - 1]);
})
