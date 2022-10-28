// 2022-10-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v=>{
    if(v == "0 0 0 0")
        return;
    let temp = v.split(" ").map(val=>Number(val));
    let min = temp[2]-temp[1];
    let max = temp[3]-temp[0];
    answer.push(`${min} ${max}`);
})
console.log(answer.join("\n"))
