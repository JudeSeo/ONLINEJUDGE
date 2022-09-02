// 2022-09-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach(v => {
    let [p, c] = v.split(" ").map(v => Number(v));
    let o =p/((c/100)+1)
    answer.push(o)
})
console.log(answer.join("\n"));