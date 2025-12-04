// 2022-04-01
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1)[0].split("");
let hash = 0;
let r = 1;
input.forEach((v, i) => {
    hash += (v.charCodeAt(0) - 96) * r;
    hash %= 1234567891;
    r *= 31
    r %= 1234567891;
})
console.log(hash);

// 뭐가 다른건지 잘 모르겠다...