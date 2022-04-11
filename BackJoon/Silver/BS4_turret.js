// 2022-04-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach((v, i) => {
    let temp = v.split(" ");
    let dis = Math.sqrt(Math.pow(temp[3] - temp[0], 2) + Math.pow(temp[4] - temp[1], 2));
    let mdis = Math.abs(temp[2] - temp[5]);
    let pdis = parseInt(temp[2]) + parseInt(temp[5]);
    if (dis != 0) {
        if (dis > pdis) {
            answer.push(0);
        }
        else if (dis == pdis) {
            answer.push(1);
        }
        else if (mdis == dis) {
            answer.push(1);
        }
        else if (mdis > dis) {
            answer.push(0);
        }
        else if (dis < pdis) {
            answer.push(2);
        }
    }
    else {
        if (temp[2] == temp[5]) {
            answer.push(-1);
        }
        else {
            answer.push(0);
        }
    }

});
console.log(answer.join("\n"));