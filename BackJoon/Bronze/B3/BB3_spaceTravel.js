// 2022-10-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
while (input.length > 0) {
    let ship = 0;
    let [num, dist] = input[0].split(" ").map(v => Number(v));
    input = input.slice(1);
    for (let i = 0; i < num; i++) {
        let temp = input[i].split(" ").map(v => Number(v));
        let fuel = temp[1] / temp[2]
        if (dist / temp[0] <= fuel)
            ship++
    }
    answer.push(ship)
    input = input.slice(num);
}
console.log(answer.join("\n"))