// 2022-09-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let [day, lastDay, max] = input[0].split(" ").map(v => Number(v));
input = input.slice(1).map(v => Number(v));
input.forEach(v => {
    if (v < lastDay)
        answer.push(`NTV: Dollar dropped by ${lastDay - v} Oshloobs`)
    if (v > max) {
        answer.push(`BBTV: Dollar reached ${v} Oshloobs, A record!`)
        max = v;
    }
    lastDay = v
})
console.log(answer.join("\n"));