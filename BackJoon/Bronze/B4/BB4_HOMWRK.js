// 2023-06-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let n = input.splice(0, 1)[0];
    let temp = input.splice(0, n);
    let tempAnswer = [];
    temp.forEach(v => {
        let tmp = v.split(" ").map(val => Number(val));
        tempAnswer.push(`${tmp[0] + tmp[1]} ${tmp[0] * tmp[1]}`);
    })
    answer.push(tempAnswer.join("\n"));
}
console.log(answer.join("\n"));