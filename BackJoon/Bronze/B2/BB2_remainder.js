// 2022-01-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
var set = new Set();
for (var i = 0; i < input.length; i++) {
    set.add(input[i]%42);
}
console.log(set.size)