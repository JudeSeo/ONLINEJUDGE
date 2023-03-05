// 2023-03-05
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").map(val => Number(val));
    let price = temp[0] * 10 >= 5000 ? temp[0] * 10 - 500 : temp[0] * 10;
    answer[i] = price / temp[1]
})
if (answer[0] == Math.min(...answer))
    console.log("S");
else if (answer[1] == Math.min(...answer))
    console.log("N");
else if (answer[2] == Math.min(...answer))
    console.log("U");