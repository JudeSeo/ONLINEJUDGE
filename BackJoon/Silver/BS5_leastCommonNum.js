// 2022-01-28
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
input.forEach((v, i) => {
    let a = parseInt(v.split(" ")[0]);
    let b = parseInt(v.split(" ")[1]);
    let greatest = 0;
    let least = 0;
    while (a != 0 && b != 0) {
        if (a > b)
            a = a % b;
        else
            b = b % a
    }
    greatest = a + b;
    least = (parseInt(v.split(" ")[0]) / greatest) * parseInt(v.split(" ")[1]);
    console.log(least);
});