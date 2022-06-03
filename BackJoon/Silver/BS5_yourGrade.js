// 2022-06-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
let sum = 0;
let cnt = 0;
input.forEach(v => {
    let temp = v.split(" ");
    switch (temp[2]) {
        case "P":
            break;
        case "A+":
            sum += (Number(temp[1]) * 4.5);
            cnt += parseInt(temp[1]);
            break;
        case "A0":
            sum += (Number(temp[1]) * 4.0);
            cnt += parseInt(temp[1]);
            break;
        case "B+":
            sum += (Number(temp[1]) * 3.5);
            cnt += parseInt(temp[1]);
            break;
        case "B0":
            sum += (Number(temp[1]) * 3.0);
            cnt += parseInt(temp[1]);
            break;
        case "C+":
            sum += (Number(temp[1]) * 2.5);
            cnt += parseInt(temp[1]);
            break;
        case "C0":
            sum += (Number(temp[1]) * 2.0);
            cnt += parseInt(temp[1]);
            break;
        case "D+":
            sum += (Number(temp[1]) * 1.5);
            cnt += parseInt(temp[1]);
            break;
        case "D0":
            sum += (Number(temp[1]) * 1.0);
            cnt += parseInt(temp[1]);
            break;
        case "F":
            sum += (Number(temp[1]) * 0);
            cnt += parseInt(temp[1]);
            break;
    }
});
answer = (sum/cnt).toFixed(6);
console.log(answer);
