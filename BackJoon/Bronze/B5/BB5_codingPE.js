// 2022-07-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = "int";
input = parseInt(input/4)
while(input>0){
    answer = "long "+answer;
    input--;
}
console.log(answer);
