// 2022-06-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1)[0].split(" ").map(v => Number(v));
let answer = 0;
input.sort((a, b) => a - b)
for (let i = 0; i < input.length; i++) {
    if (input[i] !== (i + 1)) {
        answer = input[i];
        break;
    }
}
console.log(answer);

// 메모리초과 뜸...