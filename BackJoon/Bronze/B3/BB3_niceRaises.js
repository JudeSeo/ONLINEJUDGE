// 2022-10-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
let raise = input[0].split(" ")[1];
input = input.slice(1).map(v => Number(v));
input.forEach(v => {
    if (v > raise)
        answer++;
    else if (v < raise)
        answer--;
})
console.log(answer > 0 ? 2 : (answer < 0 ? 1 : 0))