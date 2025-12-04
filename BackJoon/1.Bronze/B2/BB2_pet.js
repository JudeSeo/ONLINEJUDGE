// 2023-11-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let num = 1;
while (input[0] != "0 0") {
    let [standard, weight] = input.splice(0, 1)[0].split(" ").map(v => Number(v));
    while (input[0] != "# 0") {
        let temp = input.splice(0, 1)[0].split(" ");
        if (weight > 0) {
            if (temp[0] == "F") weight += Number(temp[1]);
            else weight -= Number(temp[1]);
        }
    }
    if (input[0] == "# 0")
        input = input.slice(1);
    let emotion = "";
    if (weight <= 0) emotion = "RIP";
    else if (weight > (standard / 2) && weight < standard * 2) emotion = ":-)";
    else emotion = ":-(";
    answer.push(`${num} ${emotion}`);
    num++;
}
console.log(answer.join("\n"));