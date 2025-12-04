// 2022-07-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 1;
while(input > 0){
    answer *= input;
    answer = answer.toString().slice(answer.toString().length-1)
    input--;
}
console.log(answer);
