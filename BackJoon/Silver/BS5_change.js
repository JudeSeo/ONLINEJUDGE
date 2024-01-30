// 2022-04-07
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
if (input == '1' ||input == '3')
    answer = -1;
else {
    while (input % 5 != 0) {
        input -= 2
        answer++;
    }
    answer += (input /= 5);
}

console.log(answer);