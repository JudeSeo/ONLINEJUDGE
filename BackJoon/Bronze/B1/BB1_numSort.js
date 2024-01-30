// 2022-01-07
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let length = input.splice(0, 1);
let answer = []
input.sort((a, b) => {
    return a - b;
})
input.forEach(value => {
    value = value.replace("\r", "");
    answer = answer + value + "\n"
})
console.log(answer);

//2751번도 동일한 코드로 해결됐다.