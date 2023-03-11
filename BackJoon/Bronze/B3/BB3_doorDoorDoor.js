// 2023-03-11
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
if (input[0] >= 6) console.log("Love is open door");
else {
    for (let i = 1; i < input[0]; i++) {
        console.log(i % 2 == 0 ? input[1] : (input[1] == 0 ? 1 : 0));
    }
}