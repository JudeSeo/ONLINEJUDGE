// 202-06-27
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v=>Number(v));
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1).map(v => Number(v));
let answer = [];
input.forEach(v => {
    let people = 0;
    for (let i = 1; i <= v; i++) {
        let cnt = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) cnt++;
        }
        if (cnt % 2 == 1) people++;
    }
    answer.push(people);
})
console.log(answer.join("\n"));