// 2022-02-07
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
for (let i = 1; i <= input[0]; i++) {
    let problem = input[i].split(" ");
    let floor = parseInt(problem[0]);
    let guest = parseInt(problem[2]);
    let num = Math.ceil(guest / floor);
    let fl = guest % floor;
    console.log((fl == 0 ? floor : fl) + (num < 10 ? "0" : "") + num);
}