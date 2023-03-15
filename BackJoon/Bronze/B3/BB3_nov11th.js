// 2023-03-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let dt = v.split(" ");
    let date = new Date(`${dt[0]}-${dt[1]}-${dt[1]}`);
    var yesDt = new Date(date.setDate(date.getDate() - dt[1]));
    answer.push(`${yesDt.getFullYear()} ${yesDt.getMonth() + 1} ${yesDt.getDate()}`);
})
console.log(answer.join("\n"))
