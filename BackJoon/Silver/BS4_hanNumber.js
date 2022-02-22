// 2022-02-13
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let cha = 0;
for (let i = 1; i <= input[0]; i++) {
    let han = i.toString();
    if (i < 100)
        cha++;
    else if (han[0] - han[1] == han[1] - han[2])
        cha++;
}
console.log(cha);

// 네이버 좀 봤다...
// 문제가 이해가 좀 안된다...ㅠ