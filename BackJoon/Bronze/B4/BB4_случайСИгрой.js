// 2024-09-25
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let num = Number(input.splice(0, 1)[0].split(" ")[1]);
let save = 0;
let bullet = 0;
input.forEach(v => {
    switch (v) {
        case "ammo":
            bullet += num;
            answer.push(bullet);
            break;
        case "save":
            save = bullet;
            answer.push(bullet);
            break;
        case "shoot":
            bullet--;
            answer.push(bullet);
            break;
        case "load":
            bullet = save;
            answer.push(bullet);
            break;
    }
})
console.log(answer.join("\n"));