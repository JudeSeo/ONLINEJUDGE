// 2022-11-01
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split("");
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].split("");
let answer = "";
input.forEach(v => {
    if(v == "I")
        answer += "E";
    else if(v == "E")
        answer += "I";
    else if(v == "S")
        answer += "N";
    else if(v == "N")
        answer += "S";
    else if(v == "T")
        answer += "F";
    else if(v == "F")
        answer += "T";
    else if(v == "J")
        answer += "P";
    else if(v == "P")
        answer += "J";
})
console.log(answer)
