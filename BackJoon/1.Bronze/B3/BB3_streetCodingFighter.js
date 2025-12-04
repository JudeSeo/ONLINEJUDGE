// 2022-11-03
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [a, b, c] = input[0].split(" ").map(v => Number(v))
input = input.slice(2);
while (input.length > 0) {
    let team = input.splice(0, 3);
    let score = 0;
    team.map(v => {
        let temp = v.split(" ").map(val => Number(val))
        score += temp[0] * a + temp[1] * b + temp[2] * c
    })
    answer.push(score);
}
console.log(Math.max(...answer))