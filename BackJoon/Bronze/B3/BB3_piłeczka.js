// 2023-09-21
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => BigInt(val));
    let num = 0;
    while (temp[0] < temp[1]) {
        temp[0] = temp[0] * 2n;
        num++;
    }
    answer.push(num);
})
console.log(answer.join("\n"));