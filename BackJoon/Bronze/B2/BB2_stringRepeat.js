// 2022-01-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
var length = input[0];
input = input.slice(1)
var answer = [];
input.forEach((v, i) => {
    v = v.split(" ");
    var string = "";
    for (var i = 0; i < v[1].length; i++) {
        for (var j = 0; j < v[0]; j++) {
            string += v[1].charAt(i);
        }
    }
    answer.push(string)
})

console.log(answer.join("\n"));