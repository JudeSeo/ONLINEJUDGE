// 2022-07-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split("");
let a = 0;
let b = 0;
for (let i = 0; i < (input.length / 2); i++) {
    switch (input[i * 2]) {
        case "A":
            a += Number(input[i * 2 + 1]);
            break;
        case "B":
            b += Number(input[i * 2 + 1]);
            break;
    }
}
let answer = a > b ? "A" : "B";
console.log(answer);
