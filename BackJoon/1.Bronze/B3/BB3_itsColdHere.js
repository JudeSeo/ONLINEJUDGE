// 2023-03-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = "";
let temp = 200;
input.forEach(v => {
    let tem = v.split(" ");
    if (temp > Number(tem[1])) {
        temp = Number(tem[1])
        answer = tem[0]
    }
})
console.log(answer);