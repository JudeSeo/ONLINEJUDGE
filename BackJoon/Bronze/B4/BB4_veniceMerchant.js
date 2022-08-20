// 2022-08-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')
let answer = [];
let num = Number(input[0]);
input = input.slice(1)
for (let i = 0; i < num; i++) {
    let [ships, speed, days] = input[0].split(" ").map(v => Number(v));
    let prob = input.slice(1, ships + 1)
    input = input.slice(ships + 1)
    let ducats = 0
    for (let j = 0; j < ships; j++) {
        let [dist, ducat] = prob[j].split(" ").map(v => Number(v))
        if (days * speed >= dist)
            ducats += ducat;
    }
    answer.push(`Data Set ${i + 1}:\n${ducats}`)
}
console.log(answer.join("\n\n"));