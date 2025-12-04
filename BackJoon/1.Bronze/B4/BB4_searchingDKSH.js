// 2024-07-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = 0;
while (true) {
    if (input.indexOf("DKSH") > -1) {
        answer++;
        input = input.replace("DKSH", "1");
    } else {
        break;
    }
}
console.log(answer);