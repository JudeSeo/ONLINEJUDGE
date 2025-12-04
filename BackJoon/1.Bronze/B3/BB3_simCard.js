// 2022-08-31
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let a = [30, 40];
let b = [35, 30];
let c = [40, 20];
let answer = [];
input.forEach(v => {
    if (v == "0 0")
        return;
    let temp = v.split(" ")
    let aTotal = a[0] * temp[0] + a[1] * temp[1];
    let bTotal = b[0] * temp[0] + b[1] * temp[1];
    let cTotal = c[0] * temp[0] + c[1] * temp[1];
    answer.push(Math.min(aTotal, bTotal, cTotal))
})
console.log(answer.join("\n"))
