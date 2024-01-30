// 2023-12-28
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ");
    let sum = Number(temp.splice(0, 1)[0]);
    while (temp.length) {
        if (temp[0] == "@") {
            sum *= 3;
        } else if (temp[0] == "%") {
            sum += 5;
        } else if (temp[0] == "#") {
            sum -= 7;
        }
        temp = temp.slice(1);
    }
    answer.push(sum.toFixed(2));
})
console.log(answer.join("\n"));