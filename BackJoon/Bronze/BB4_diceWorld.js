// 2022-02-14
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].split(" ");
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0].split(" ");
input.sort((a, b) => (b-a));
let answer = 0;
if(input[0] == input[1]){
    if(input[1] == input[2])
        answer = 10000 + (input[0]*1000);
     else
        answer = 1000 + (input[1] * 100);  
} else if(input[1] == input[2]){
    answer = 1000 + (input[1] * 100);  
} else {
    answer = input[0] * 100;
}

console.log(answer);