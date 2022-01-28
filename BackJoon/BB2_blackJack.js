// 2022-01-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let goal = input[0].split(" ")[1];
let answer = new Set();
input = input.slice(1)[0].split(" ");
for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        for (let k = j + 1; k < input.length; k++) {
            let sum = parseInt(input[i]) + parseInt(input[j]) + parseInt(input[k]);
            if (sum <= goal)
                answer.add(sum);
        }
    }
}
let arr = Array.from(answer);
arr.sort((a, b) => {
    return a - b;
});
console.log(arr[arr.length - 1]);