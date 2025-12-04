// 2022-02-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(0,input.length-1)
let answer = [];
input.forEach((v, i)=>{
    let temp = v.slice();
    let cnt=0;
    for(let i=0;i<temp.length;i++){
        if(temp[temp.length-1-i] == v[i])
            cnt++;
    }
    if(cnt == temp.length)
        answer.push("yes");
    else
        answer.push("no");
});
console.log(answer.join("\n"));