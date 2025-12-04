// 2022-07-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let line = Number(input[0].split(" ")[0]);
let basic = input.slice(1, line + 1);
let compare = input.slice(line + 2);
let answer = 0;
basic.forEach((v, i) => {
    let temp = v.split("")
    let comp = compare[i].split("")
    temp.forEach((value, index) => {
        if (value == comp[index])
            answer++;
    })
})
console.log(answer);
