// 2022-01-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let num = input[0].split(" ");
let answer = []
for (let i = 0; i < num.length; i++) {
    var temp = num[i].split("");
    for (let j = 0; j < temp.length / 2; j++) {
        var t = temp[j];
        temp[j] = temp[temp.length - j - 1]
        temp[temp.length - j - 1] = t;
    }
    answer.push(temp.join(""));
}
answer.sort((a, b) => {
    return b - a;
})
console.log(answer[0]);