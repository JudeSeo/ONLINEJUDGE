// 2022-06-21
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
input.find((v, i) => {
    console.log(`Case ${i + 1}: Sorting... done!`)
})
