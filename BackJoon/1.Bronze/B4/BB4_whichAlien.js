// 2022-07-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>Number(v));
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').map(v => Number(v));
let answer = [];
if (input[0] >= 3 && input[1] <= 4)
    answer.push("TroyMartian");
if (input[0] <= 6 && input[1] >= 2)
    answer.push("VladSaturnian");
if (input[0] <= 2 && input[1] <= 3)
    answer.push("GraemeMercurian");
console.log(answer.join("\n"));
