// 2024-06-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제2.txt").toString().trim().split('\r\n');
let n = input[0];
let tShirts = input[1].split(" ");
let [t, p] = input[2].split(" ");
let answer = [];
let tPair = 0;
tShirts.map(v => tPair += Math.ceil(v / t));
answer.push(tPair);
let pPair = Math.floor(n / p);
let pSingle = n % p;
answer.push(`${pPair} ${pSingle}`);
console.log(answer.join("\n"));
