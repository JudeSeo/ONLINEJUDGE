// 2022-12-20
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
for (let i = 1; i <= +input[0]; i++) {
    const krStyle = input[i].split(' ');
    let number = +krStyle[0];
    let name = krStyle[1];
    switch (name) {
        case 'kg':
            console.log(`${(number * 2.2046).toFixed(4)} lb`);
            break;
        case 'lb':
            console.log(`${(number * 0.4536).toFixed(4)} kg`);
            break;
        case 'l':
            console.log(`${(number * 0.2642).toFixed(4)} g`);
            break;
        case 'g':
            console.log(`${(number * 3.7854).toFixed(4)} l`);
            break;
    }
}


// var fs = require('fs');
// // let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
// var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n').slice(1);
// let answer = [];
// let trans = {
//     kg: 2.2046,
//     lb: 0.4536,
//     l: 0.2642,
//     g: 3.7854
// }
// let unit = {
//     kg: "lb",
//     lb: "kg",
//     l: "g",
//     g: "l"
// }
// input.forEach(v => {
//     let temp = v.split(" ")
//     answer.push(`${(temp[0] * trans[temp[1]]).toFixed(4)} ${unit[temp[1]]}`);
// })
// console.log(answer.join("\n").trim())

// 왜 틀렸는지 모르겠다...