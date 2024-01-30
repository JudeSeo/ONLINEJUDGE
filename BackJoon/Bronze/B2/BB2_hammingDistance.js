// 2023-12-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let temp1 = input.splice(0, 1)[0].split("");
    let temp2 = input.splice(0, 1)[0].split("");
    let sum = 0;
    temp1.forEach((v, i) => {
        if (v != temp2[i]) sum++;
    })
    answer.push(`Hamming distance is ${sum}.`);
}
console.log(answer.join("\n"));