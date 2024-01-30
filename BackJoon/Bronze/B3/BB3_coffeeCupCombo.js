// 2022-11-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = 0;
input = input.slice(1)[0].split("").map(v => Number(v));
let coffee = 0;
input.forEach(v => {
    if (v == 1) {
        answer++
        coffee = 2;
    } else if (coffee > 0) {
        coffee--;
        answer++;
    }
})
console.log(answer)
