// 2024-02-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = [];
for (let i = input; i >= 0; i--) {
    if (i > 1) {
        answer.push(`${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i - 1} ${i == 2 ? "bottle" : "bottles"} of beer on the wall.`);
    } else if (i == 1) {
        answer.push(`${i} bottle of beer on the wall, ${i} bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.`);
    } else {
        answer.push(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, ${input} ${input == 1 ? "bottle" : "bottles"} of beer on the wall.`);
    }
}
console.log(answer.join("\n\n"));