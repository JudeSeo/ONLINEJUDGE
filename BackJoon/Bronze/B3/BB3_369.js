// 2023-02-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n')[0];
let answer = 0, index = 0;
for (let i = 1; i <= input; i++) {
    index = i;
    while (index.toString().indexOf("3") > -1) {
        answer++
        index = index.toString().replace("3", "0");
    }
    while (index.toString().indexOf("6") > -1) {
        answer++
        index = index.toString().replace("6", "0");
    }
    while (index.toString().indexOf("9") > -1) {
        answer++
        index = index.toString().replace("9", "0");
    }
}
console.log(answer);
