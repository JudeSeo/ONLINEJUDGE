// 2023-01-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
while (input.length > 2) {
    let [num, temp] = input.splice(0, 2);
    let mary = temp.split(" ").map(v => Number(v)).filter(v => v == 0).length;
    let john = num - mary;
    answer.push(`Mary won ${mary} times and John won ${john} times`)
}
console.log(answer.join("\n"))