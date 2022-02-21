// 2022-02-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let n = input[1].split(" ");
let m = input[3].split(" ");
n.sort((a, b)=> (a-b));
let answer = new Array(m.length).fill(0);
n.forEach((v, i)=>{
    let index = m.find(v)
    if (index >= 0) {
        answer[index] = 1;
    }
});
console.log(answer.join(" "));

// 이분탐색 사용 필요