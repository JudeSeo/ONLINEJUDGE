// 2022-01-19
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
var sum = input[0] * input[1] * input[2]+"";
var temp = new Array(10).fill(0)
for (var i = 0; i < sum.length; i++) {
    var reported = sum.charAt(i);
    temp[reported]++
}
temp = temp.join("\n")
console.log(temp)