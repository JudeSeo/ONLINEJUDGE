// 2022-06-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let temp1 = Number(input[0].split(" ")[0]);
let wind1 = Number(input[0].split(" ")[1]);
let temp2 = Number(input[1].split(" ")[0]);
let wind2 = Number(input[1].split(" ")[1]);
let answer = "";
if (temp2 < 0 && wind2 >= 10)
    answer = "A storm warning for tomorrow! Be careful and stay home if possible!";
else if (temp1 > temp2)
    answer = "MCHS warns! Low temperature is expected tomorrow.";
else if (wind1 < wind2)
    answer = "MCHS warns! Strong wind is expected tomorrow.";
else
    answer = "No message";
console.log(answer);
