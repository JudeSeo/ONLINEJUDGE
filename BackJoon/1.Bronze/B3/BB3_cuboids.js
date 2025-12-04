// 2022-08-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "0 0 0 0")
        return;
    let temp = v.split(" ").map(val => Number(val));
    let arr = [];
    if (temp[3] == 0)
        temp[3] = temp[0] * temp[1] * temp[2];
    else if (temp[0] == 0)
        temp[0] = temp[3] / (temp[1] * temp[2])
    else if (temp[1] == 0)
        temp[1] = temp[3] / (temp[0] * temp[2])
    else if (temp[2] == 0)
        temp[2] = temp[3] / (temp[1] * temp[0])
    arr.push(temp[0], temp[1], temp[2], temp[3]);
    answer.push(arr.join(" "))
})
console.log(answer.join("\n"));