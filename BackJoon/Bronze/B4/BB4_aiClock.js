// 2022-06-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let second = Number(input[1]);
input = input.slice(0, 1)[0].split(" ").map(v => Number(v));
input[0] += parseInt(second / 3600);
input[1] += parseInt((second % 3600) / 60);
input[2] += second % 60
while (input[2] > 59) {
    input[2] -= 60;
    input[1] += 1;
}
while (input[1] > 59) {
    input[1] -= 60;
    input[0] += 1;
}
while (input[0] > 23) {
    input[0] -= 24
}
console.log(input.join(" "));
