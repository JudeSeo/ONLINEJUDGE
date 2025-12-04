// 2022-12-05
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
input = input.slice(1);
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").map(val => Number(val)).sort((a, b) => b - a);
    let str = `Case #${i + 1}: `
    if (temp[0] ** 2 == temp[1] ** 2 + temp[2] ** 2)
        str += "YES"
    else
        str += "NO"
    answer.push(str)
})
console.log(answer.join("\n"))
