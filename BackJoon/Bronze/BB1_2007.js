// 2022-03-09
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
let day = {
    0:"SUN",
    1:"MON",
    2:"TUE",
    3:"WED",
    4:"THU",
    5:"FRI",
    6:"SAT",
}
let answer = [];
let date = new Date(2007+","+parseInt(input[0])+","+parseInt(input[1])).getDay();
console.log(day[date]);