// 2022-07-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let perse = Number(input[0].split(" ")[0]) + Number(input[1].split(" ")[1]);
let esteg = Number(input[0].split(" ")[1]) + Number(input[1].split(" ")[0]);
let answer = "Persepolis"
if (perse < esteg)
    answer = "Esteghlal"
else if (perse == esteg) {
    if (input[0].split(" ")[1] > input[1].split(" ")[1])
        answer = "Esteghlal"
    else if (input[0].split(" ")[1] < input[1].split(" ")[1])
        answer = "Persepolis";
    else
        answer = "Penalty";
}
console.log(answer);
