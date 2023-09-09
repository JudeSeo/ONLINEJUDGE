// 2023-09-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ");
    switch (true) {
        case Number(temp[1]) >= 97:
            answer.push(temp[0] + " A+");
            break;
        case Number(temp[1]) >= 90:
            answer.push(temp[0] + " A");
            break;
        case Number(temp[1]) >= 87:
            answer.push(temp[0] + " B+");
            break;
        case Number(temp[1]) >= 80:
            answer.push(temp[0] + " B");
            break;
        case Number(temp[1]) >= 77:
            answer.push(temp[0] + " C+");
            break;
        case Number(temp[1]) >= 70:
            answer.push(temp[0] + " C");
            break;
        case Number(temp[1]) >= 67:
            answer.push(temp[0] + " D+");
            break;
        case Number(temp[1]) >= 60:
            answer.push(temp[0] + " D");
            break;
        case Number(temp[1]) >= 0:
            answer.push(temp[0] + " F");
            break;
    }
})
console.log(answer.join("\n"));