// 2022-04-17
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
input = input.slice(1);
input.forEach((v, i)=>{
    let temp = v.split(" ");
    let a = parseInt(temp[0], 2);
    let b = parseInt(temp[1], 2)
    let sum = BigInt(a) + BigInt(b);
    answer.push(sum.toString(2));
})

console.log(answer.join("\n"));

// 이렇게 풀어도 될거 같은데 왜 틀린지 모르겠다....