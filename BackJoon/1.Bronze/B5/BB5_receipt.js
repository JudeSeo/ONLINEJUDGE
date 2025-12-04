// 2022-07-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = "Yes";
let total = input[0];
input = input.slice(2);
input.forEach(v=>{
    let temp = v.split(" ");
    total -= (temp[0]*temp[1])
})
if(total != 0)
    answer="No";
console.log(answer);
