// 2022-05-22
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1)[0].split(" ");
let answer = [];
for (let i = 1; i < input.length; i++) {
    let a=input[0]
    let b=input[i]
    while(b!=0) {
        let r=a%b;
        a=b;
        b=r;
    }
    answer.push(`${input[0]/a}/${input[i]/a}`)
}
console.log(answer.join("\n"));