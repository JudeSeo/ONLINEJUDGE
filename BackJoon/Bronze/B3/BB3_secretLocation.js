// 2023-01-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [], loca = [];
input.forEach(v=>{
    loca.push(v.trim().split("").length);
})
answer.push(`Latitude ${loca[0]}:${loca[1]}:${loca[2]}`)
answer.push(`Longitude ${loca[3]}:${loca[4]}:${loca[5]}`)
console.log(answer.join("\n"));
