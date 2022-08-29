// 2022-08-29
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let num = Number(input[0].split(" ")[1]);
input = input.slice(1);
input.forEach(v => {
    let flag = false;
    let temp = v.split(" ").slice(1).map(val => Number(val));
    temp.forEach(val => {
        if (val == num)
            flag = true
    })
    if (flag)
        answer.push("KEEP")
    else
        answer.push("REMOVE")
})
console.log(answer.join("\n"));