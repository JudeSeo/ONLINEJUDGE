// 2022-06-03
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let arr = [1n,1n];
let answer=[]
let max = Math.max(...input.map(v => v.split(" ")[0]))
for(let i=2;i<=max;i++){
    arr.push(arr[i-2]+arr[i-1]);
}
input.forEach((v, i)=>{
    let temp = v.split(" ").map(v=>BigInt(v));
    answer.push(`Case #${i+1}: `+(arr[temp[0]-1n] % (temp[1])).toString())
})
console.log(answer.join("\n"));
