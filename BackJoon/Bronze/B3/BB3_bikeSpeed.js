// 2023-10-18
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("예제.txt").toString().trim().split('\r\n');
let answer = [];
input.forEach((v, i) => {
    let temp = v.split(" ").map(val => Number(val));
    if (temp[1] == 0) return;
    let miles = (temp[0] / 12 / 5280 * 3.1415927 * temp[1]);
    let milePerH = miles / temp[2] * 3600;
    console.log(`Trip #${i + 1}: ${miles.toFixed(2)} ${milePerH.toFixed(2)}`);
});
