// 2024-01-31
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
while (input.length > 0) {
    let num = input.splice(0, 1)[0];
    let shop = input.splice(0, 1)[0].split(" ").sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < num - 1; i++) {
        sum += Math.abs(shop[i] - shop[i + 1]);
    }
    sum += Math.abs(shop[0] - shop[num - 1]);
    answer.push(sum);
}
console.log(answer.join("\n"));