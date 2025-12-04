// 2024-06-04
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let arr = [];
let standard = input[0].toString().substr(0, input[0].toString().length - 2) * 100;
let share = Math.ceil(standard / input[1]);
let num = share * input[1];
while (standard + 100 > num) {
    arr.push(num.toString().substr(-2));
    num += input[1];
}
let answer = Math.min(...arr).toString().padStart(2, 0);
console.log(answer);