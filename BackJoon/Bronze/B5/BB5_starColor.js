// 2024-06-26
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
let answer = 0;
switch (true) {
    case input >= 620:
        answer = "Red";
        break;
    case input >= 590:
        answer = "Orange";
        break;
    case input >= 570:
        answer = "Yellow";
        break;
    case input >= 495:
        answer = "Green";
        break;
    case input >= 450:
        answer = "Blue";
        break;
    case input >= 425:
        answer = "Indigo";
        break;
    case input >= 380:
        answer = "Violet";
        break;
}
console.log(answer);