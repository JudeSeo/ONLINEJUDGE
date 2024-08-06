// 2024-08-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = "";
if (input.replaceAll(" ", "") == "\"\"") answer = "CE";
else if (input.split("").filter(v => v == "\"").length < 2) answer = "CE";
else if (input[0] != "\"" || input[input.length - 1] != "\"") answer = "CE";
else answer = input.slice(input.indexOf("\"") + 1, input.lastIndexOf("\""));
console.log(answer);