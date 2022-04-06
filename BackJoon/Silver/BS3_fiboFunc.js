// 2022-04-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let max = Math.max(...input);
let answer = [0, 1];
for (let i = 2; i <= max; i++) {
    answer[i] = BigInt(answer[i - 1]) + BigInt(answer[i - 2]);
}
input.forEach((v, i) => {
    let result = [];
    if (v == '0') {
        result.push(1)
        result.push(0)
    } else {
        result.push(answer[v - 1].toString());
        result.push(answer[v].toString());
    }
    console.log(result.join(" "));
})