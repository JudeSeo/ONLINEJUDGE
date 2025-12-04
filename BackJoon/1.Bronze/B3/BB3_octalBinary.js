// 2022-02-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input[0];
let answer = [];
for (let i = 0; i < input.length; i++) {
    let temp = parseInt(input[i], 8).toString(2);
    while (temp.length < 3) {
        if (i == 0)
            break;
        else
            temp = "0" + temp;
    }
    answer.push(temp);
}
console.log(answer.join(""));