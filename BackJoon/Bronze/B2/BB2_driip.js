// 2024-02-20
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0].substr(-5);
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0].substr(-5);
let answer = input == "driip" ? "cute" : "not cute";
console.log(answer);