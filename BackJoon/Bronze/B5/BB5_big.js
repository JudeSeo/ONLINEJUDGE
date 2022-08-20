var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(0, input.length - 1);
input.forEach((v, i) => {
    let temp = v.split(" ").map(v => Number(v));
    answer.push(temp[0] > temp[1] ? "Yes" : "No");
})
console.log(answer.join("\n"));
