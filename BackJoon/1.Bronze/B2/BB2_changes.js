// 2022-04-19
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n')[0];
let answer = 0;
let money = [500, 100, 50, 10, 5, 1];
let temp = 1000-input;
money.forEach((v, i)=>{
    while(v<=temp){
        temp -= v;
        answer++;
    }
})

console.log(answer);