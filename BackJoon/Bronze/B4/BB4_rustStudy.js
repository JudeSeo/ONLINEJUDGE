// 2023-10-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
let plan = input[0].split(" ").map(v=>Number(v));
let study = input[1].split(" ").map(v=>Number(v));
for (let i = 0; i < plan.length; i++) {
    if (plan[i] <= study[i]) answer++;
}
console.log(answer);