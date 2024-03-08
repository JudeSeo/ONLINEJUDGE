// 2024-03-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
let n = input.splice(0, 1)[0].split(" ").map(v => BigInt(v));
let answer = [];
input.forEach(v => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[0] == 1) {
        let sum = 0n;
        for (let i = temp[1] - 1; i < temp[2]; i++) {
            sum += n[i];
        }
        let tmp = n[temp[1]-1];
        n[temp[1]-1] = n[temp[2]-1];
        n[temp[2]-1] = tmp
        answer.push(sum.toString());
    } else {
        let ab = 0n;
        let cd = 0n;
        for (let i = temp[1] - 1; i < temp[2]; i++) {
            ab += n[i];
        }
        for (let i = temp[3] - 1; i < temp[4]; i++) {
            cd += n[i];
        }
        answer.push((ab - cd).toString());
    }
})
console.log(answer.join("\n"));