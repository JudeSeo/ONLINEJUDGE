// 2022-06-08
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = [];
let siteNum = input[0].split(" ")[0];
let sites = []
input = input.slice(1);
let finds = input.slice(siteNum);

input.slice(0, siteNum).map(v => {
    let [ip, pw] = v.split(" ");
    sites[ip] = pw;
})
finds.map(v => {
    answer.push(sites[v])
})
console.log(answer.join("\n"));
