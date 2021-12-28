// 2021-12-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = fs.readFileSync('예제.txt').toString().split('\n');
let alp = []
for (let i = 97; i <= 122; i++) {
    alp.push(String.fromCharCode(i));
}
for (let i = 0; i < input.length; i++) {
    let answer = [];
    alp.forEach((value) => {
        answer.push(input[i].indexOf(value))
    })
    console.log(...answer)
}

// 제출 했는데 계속 틀렸다고 떠서 왜 그런가 했더니 문제는 input에 바로 넣었는데 풀때는 input에 push 해서 안으로 한 번 더 들어가서 안 됐당...