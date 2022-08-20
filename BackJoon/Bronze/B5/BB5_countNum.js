var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let num = Number(input[2]);
input = input.slice(1, 2)[0].split(" ");
let answer = 0;
input.forEach(v => {
    if (v == num)
        answer++;
})
console.log(answer);
