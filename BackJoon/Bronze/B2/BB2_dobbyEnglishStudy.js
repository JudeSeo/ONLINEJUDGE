// 2023-12-23
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    if (v == "#") return;
    let alp = v.split(" ")[0];
    let temp = v.split("").slice(2);
    let len = temp.filter(val => val.toLowerCase() == alp).length;
    answer.push(`${alp} ${len}`);
})
console.log(answer.join("\n"));