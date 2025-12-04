// 2023-01-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ").map(v=>Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split(" ").map(v => Number(v));
let answer = ""
if (input[0] + input[1] == input[2])
    answer = `${input[0]}+${input[1]}=${input[2]}`
else if (input[0] * input[1] == input[2])
    answer = `${input[0]}*${input[1]}=${input[2]}`
else if (input[0] / input[1] == input[2])
    answer = `${input[0]}/${input[1]}=${input[2]}`
else if (input[0] - input[1] == input[2])
    answer = `${input[0]}-${input[1]}=${input[2]}`
else if (input[0] == input[1] + input[2])
    answer = `${input[0]}=${input[1]}+${input[2]}`
else if (input[0] == input[1] - input[2])
    answer = `${input[0]}=${input[1]}-${input[2]}`
else if (input[0] == input[1] * input[2])
    answer = `${input[0]}=${input[1]}*${input[2]}`
else if (input[0] == input[1] / input[2])
    answer = `${input[0]}=${input[1]}/${input[2]}`
console.log(answer)