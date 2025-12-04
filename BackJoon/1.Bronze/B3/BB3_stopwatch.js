// 2022-10-11
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v));
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').map(v => Number(v));
let answer = ""
if (input[0] % 2 == 1)
    answer = "still running";
else {
    let time = 0;
    input = input.slice(1);
    while (input.length > 0) {
        time += (input[1] - input[0])
        input = input.slice(2);
    }
    answer = time;
}
console.log(answer);