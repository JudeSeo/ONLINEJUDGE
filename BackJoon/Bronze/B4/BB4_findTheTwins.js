// 2023-08-02
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let answer = [];
input.forEach(v => {
    if (v.indexOf("17") > -1 && v.indexOf("18") > -1)
        answer.push(v + "\n" + "both");
    else if (v.indexOf("17") > -1)
        answer.push(v + "\n" + "zack");
    else if (v.indexOf("18") > -1)
        answer.push(v + "\n" + "mack");
    else
        answer.push(v + "\n" + "none");
})
console.log(answer.join("\n\n"))