// 2022-03-06 -> // 2022-05-06
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let [d, b] = input[0].split(" ");
input = input.slice(1);
let dd = new Set();
let bb = new Set();
for(let i=0; i<input.length; i++) {
    if(i < d) {
        dd.add(input[i]);
    } else {
        bb.add(input[i]);
    }
}
bb.forEach((v, i) => {
    if(dd.has(v)) answer.push(v);
})
answer.sort();
console.log(answer.length)
console.log(answer.join('\n'));


// 시간초과...ㅠ
// 왜 이건 통과인지 모르겠네...