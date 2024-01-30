// 2023-10-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = 0;
let chess = {
    K: 0,
    k: 0,
    P: 1,
    p: -1,
    N: 3,
    n: -3,
    B: 3,
    b: -3,
    R: 5,
    r: -5,
    Q: 9,
    q: -9
}
input.forEach(v => {
    let temp = v.split("");
    temp.forEach(val => {
        if (val != '.')
            answer += chess[val];
    })
})
console.log(answer);