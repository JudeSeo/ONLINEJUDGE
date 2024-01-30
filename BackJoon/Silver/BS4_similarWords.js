// 2022-03-23
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n').slice(1);
let answer = 0;
let first = input[0].split("").sort();
input = input.slice(1);
input.forEach((v, i) => {
    let flag = true;
    first.forEach((value, index) => {
        if (v.indexOf(value) == -1)
            flag = false
    });
    if (flag)
        answer++;
})
console.log(answer);

// 문제 모르겠당

// 두 개의 단어가 같은 종류의 문자로 이루어져 있다.
// 같은 문자는 같은 개수 만큼 있다.