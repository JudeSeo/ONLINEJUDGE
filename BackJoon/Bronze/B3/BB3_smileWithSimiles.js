// 2023-08-31
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer = [];
let [adj, noun, ...words] = input;
let ad = words.splice(0, adj);
let no = words.splice(0, noun);
ad.forEach(v=>{
    no.forEach(val=>{
        answer.push(`${v} as ${val}`);
    })
})
console.log(answer.join("\n"));