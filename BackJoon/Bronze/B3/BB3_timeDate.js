// 2023-03-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    let result = "";
    if (temp[0] <= 24 && temp[1] <= 59) result = "Yes "
    else result = "No "
    let date = new Date(2024 + "-" + temp[0] + "-" + temp[1]);
    if (date.getMonth() == (temp[0] - 1) && date.getDate() == temp[1]) result += "Yes"
    else result += "No";
    answer.push(result)
})
console.log(answer.join("\n"))