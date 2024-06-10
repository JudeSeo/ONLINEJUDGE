// 2024-06-10
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n')[0];
let club = {
    M:"MatKor",
    W:"WiCys",
    C:"CyKor",
    A:"AlKor",
    $:"$clear",
}
let answer=club[input]
console.log(answer);
