// 2022-02-15
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\r\n');
input = input.slice(1);
let answer = [];
input.forEach((v, i)=>{
    let temp = v.split("");
    let cnt = 0;
    for(let i=0;i<temp.length;i++){
        if(temp[i] == "(")
            cnt++;
        else if(temp[i] == ")")
            cnt--;
        if(cnt < 0)
            break;
    }
    if(cnt == 0)
        answer.push("YES");
    else
        answer.push("NO")
});

console.log(answer.join("\n"));