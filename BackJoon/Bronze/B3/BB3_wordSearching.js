// 2023-04-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let word = input.splice(0, 1)[0];
let answer = 0;
input.forEach(v => {
    while (v.indexOf(word) > -1) {
        answer++;
        v = v.slice(v.indexOf(word) + word.length);
    }
})
console.log(answer);