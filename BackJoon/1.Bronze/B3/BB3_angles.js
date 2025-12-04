// 2022-09-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] + temp[1] + temp[2] != 180)
        answer.push(v + " Check");
    else
        answer.push(v + " Seems OK")
})
console.log(answer.join("\n"))