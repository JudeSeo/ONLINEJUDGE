// 2022-10-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
while (input.length > 0) {
    let k = input[0].split(" ")[1];
    let candy = input[1].split(" ").map(v => Number(v));
    let children = 0;
    candy.forEach(v => {
        children += Math.floor(v / k);
    })
    answer.push(children);
    input = input.slice(2);
}
console.log(answer.join("\n"))