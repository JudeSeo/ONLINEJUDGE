// 2025-03-30
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let [ds, ys] = input[0].split(" ").map(v => Number(v));
let [dm, ym] = input[1].split(" ").map(v => Number(v));
let sun = ys - ds;
let moon = ym - dm;
while (sun != moon) {
    if (sun > moon) moon += ym;
    else sun += ys;
}
console.log(sun);