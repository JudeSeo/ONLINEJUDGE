// 2024-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach((v, i) => {
    switch (true) {
        case v <= 25:
            answer.push(`Case #${i + 1}: World Finals`);
            break;
        case v <= 1000:
            answer.push(`Case #${i + 1}: Round 3`);
            break;
        case v <= 4500:
            answer.push(`Case #${i + 1}: Round 2`);
            break;
        default:
            answer.push(`Case #${i + 1}: Round 1`);
            break;
    }
})
console.log(answer.join("\n"));