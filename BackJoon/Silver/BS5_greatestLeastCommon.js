// 2022-01-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let a = parseInt(input[[0]].split(" ")[0]);
let b = parseInt(input[0].split(" ")[1]);
let greatest = 0;
let least = 0;
while (a != 0 && b != 0) {
    if (a > b)
        a = a % b;
    else
        b = b % a
}
greatest = a + b;
least = greatest * (parseInt(input[[0]].split(" ")[0]) / greatest) * (parseInt(input[0].split(" ")[1]) / greatest);
console.log(greatest);
console.log(least);

// 오늘 자료구조로 최대공약수 구하는법 배워서 풀어본 문제!