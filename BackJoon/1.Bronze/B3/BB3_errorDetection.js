// 2022-11-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let bi = temp[0].toString(2).split("").filter(val => val == 1).length % 2;
    if (bi == temp[1])
        answer.push("Valid")
    else
        answer.push("Corrupt")

})
console.log(answer.join("\n"));