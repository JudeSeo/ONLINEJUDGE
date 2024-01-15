// 2024-01-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let chicken = temp[0];
    while (temp[0] >= temp[1]) {
        let tmp = parseInt(temp[0] / temp[1]);
        temp[0] %= temp[1];
        temp[0] += tmp;
        chicken += tmp
    }
    answer.push(chicken);
})
console.log(answer.join("\n"));