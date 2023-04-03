// 2023-04-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val))
    let bmi = temp[1] / ((temp[0] / 100) ** 2);
    if (temp[0] < 140.1) {
        answer.push(6);
    } else if (temp[0] < 146) {
        answer.push(5);
    } else if (temp[0] < 159) {
        answer.push(4);
    } else if (temp[0] < 161) {
        if (bmi >= 16 && bmi < 35)
            answer.push(3);
        else
            answer.push(4);
    } else if (temp[0] < 204) {
        if (bmi >= 20 && bmi < 25)
            answer.push(1);
        else if ((bmi >= 18.5 && bmi < 20) || (bmi >= 25 && bmi < 30))
            answer.push(2)
        else if ((bmi >= 16 && bmi < 18.5) || (bmi >= 30 && bmi < 35))
            answer.push(3)
        else
            answer.push(4)
    } else {
        answer.push(4);
    }
})
console.log(answer.join("\n"))