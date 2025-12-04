// 2022-01-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = input[0].trim().split(" ")
if (answer[0] == "")
    answer.length = 0;
console.log(answer.length);

// 쉬워보여서 걍 제출 했는데 틀려서 띠용...
// 값이 아무것도 없을때 1로 측정되서 그거 예외처리 해주니까 통과