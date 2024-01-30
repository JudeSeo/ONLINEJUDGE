// 2022-08-24
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let caseNum = Number(input[0]);
input = input.slice(1);
for (let i = 0; i < caseNum; i++) {
    let [num, dist] = input[0].split(" ").map(v => Number(v))
    let caseI = input.slice(1, num + 1);
    input = input.slice(num + 1)
    let ship = 0;
    caseI.forEach(val => {
        let [v, f, c] = val.split(" ").map(value => Number(value));
        let hour = dist / v
        let fuel = f / c
        if (fuel >= hour)
            ship++;
    })
    answer.push(ship)
}

console.log(answer.join("\n"));