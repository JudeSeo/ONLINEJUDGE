// 2024-05-22
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').slice(1);
let answer = 0;
input.forEach(v => {
    let temp = v.split("");
    let arr = [];
    let flag = true;
    for (let i = 0; i < temp.length; i++) {
        while (temp[i] === temp[i + 1]) {
            i++;
        }
        if (!arr.includes(temp[i])) arr.push(temp[i]);
        else flag = false;
    }
    if (flag) answer++;
})
console.log(answer);
