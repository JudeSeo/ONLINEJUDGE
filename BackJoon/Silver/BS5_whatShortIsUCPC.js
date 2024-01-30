// 2022-06-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let ucpc = ["U", "C", "P", "C"];
let answer = [];
let arr = [];
let i = 0;
let flag = true;
while (flag) {
    if (input.indexOf(ucpc[i]) >= 0) {
        arr.push(input.indexOf(ucpc[i]));
        input = input.slice((input.indexOf(ucpc[i])) + 1)
        i++;
    } else{
        flag = false;
        break;
    }
}

if (arr.length == 4)
    answer = "I love UCPC";
else
    answer = "I hate UCPC"
console.log(answer);
