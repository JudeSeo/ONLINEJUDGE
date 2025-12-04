// 2024-02-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split("");
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[1].split("");
let answer = [];
let [Adrian, Bruno, Goran] = [0, 0, 0];
const AdrianAnswer = ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C'];
const BrunoAnswer = ['B', 'A', 'B', 'C', 'B', 'A', 'B', 'C', 'B', 'A', 'B', 'C'];
const GoranAnswer = ['C', 'C', 'A', 'A', 'B', 'B', 'C', 'C', 'A', 'A', 'B', 'B'];
input.forEach((v, i) => {
    let index = i % 12
    if (v == AdrianAnswer[index]) Adrian++;
    if (v == BrunoAnswer[index]) Bruno++;
    if (v == GoranAnswer[index]) Goran++;
})
let max = Math.max(Adrian, Bruno, Goran);
answer.push(max);
if (max == Adrian)
    answer.push("Adrian");
if (max == Bruno)
    answer.push("Bruno");
if (max == Goran)
    answer.push("Goran");
console.log(answer.join("\n"))