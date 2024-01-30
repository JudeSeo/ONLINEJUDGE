// 2022-02-14
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
input.sort((a, b) => {
    if(a.split(" ")[0] != b.split(" ")[0]){
        return a.split(" ")[0] - b.split(" ")[0]
    } else {
        return a.split(" ")[1] - b.split(" ")[1]
    }
})

console.log(input.join("\n"));