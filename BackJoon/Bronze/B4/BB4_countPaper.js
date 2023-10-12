// 2023-10-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = 0;
let money = {
    136: 1000,
    142: 5000,
    148: 10000,
    154: 50000,
}
input.forEach(v => {
    let temp = v.split(" ");
    answer += money[temp[0]];
})
console.log(answer);