// 2022-02-15
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
let answer = 0;
input.forEach((v, i)=>{
    let temp = v.slice();
    let cnt=0;
    for(let i=0;i<temp.length;i++){
        if(temp[temp.length-1-i] == v[i])
            cnt++;
    }
    if(cnt == temp.length)
        answer = 1;
});
console.log(answer);