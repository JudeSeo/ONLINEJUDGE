// 2022-01-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let sum = input[0] * input[1] * input[2] + "";
let temp = new Array(10).fill(0)
for (let i = 0; i < sum.length; i++) {
    let reported = sum.charAt(i);
    temp[reported]++
}
temp = temp.join("\n")
console.log(temp)
