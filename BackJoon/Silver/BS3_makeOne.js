// 2022-05-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
input = parseInt(input);
let answer = 0;
while (input > 1) {
    if (input % 3 == 0) {
        input /= 3;
        answer++;
    } else if (input % 2 == 0) {
        input /= 2;
        answer++;
    } else if (input % 3 == 1) {
        input -= 1;
        answer++;
    } else if (input % 2 == 1) {
        input -= 1;
        answer++;
    }
}
console.log(answer);

// dp로 풀어야하는듯