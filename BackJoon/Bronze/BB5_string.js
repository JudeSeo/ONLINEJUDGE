var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = [];
input.forEach(v => {
    answer.push(v[0] + v[v.length - 1]);
})
console.log(answer.join("\n"));
