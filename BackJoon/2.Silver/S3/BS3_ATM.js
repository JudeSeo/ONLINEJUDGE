// 2022-02-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(" ");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[1].split(" ");
let answer = 0;
input.sort((a, b) => (a - b))
input.forEach((v, index) => {
    for (let i = 0; i <= index; i++) {
        answer += parseInt(input[i]);
    }
})
console.log(answer);
