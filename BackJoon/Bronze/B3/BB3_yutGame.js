// 2022-10-08
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach(v => {
    let result = [];
    result[0] = 0;
    result[1] = 0;
    v.split(" ").map(val => Number(val)).forEach(x => {
        result[x] += 1;
    });
    switch (result[0]) {
        case 0:
            answer.push("E");
            break;
        case 1:
            answer.push("A");
            break;
        case 2:
            answer.push("B");
            break;
        case 3:
            answer.push("C");
            break;
        case 4:
            answer.push("D");
            break;
    }
})
console.log(answer.join("\n"))