// 2024-02-12
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let m = (5n ** BigInt(input)).toString();
let answer = '0.' + '0'.repeat(input - m.length) + m;
console.log(answer);


// 쉬워보였는데 어렵.... 다른 사람꺼 보고 품