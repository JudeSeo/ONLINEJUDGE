// 2023-12-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ");
    let str = temp[1].split("");
    let error = str.splice(temp[0] - 1, 1)[0];
    answer.push(str.join(""));
})
console.log(answer.join("\n"));