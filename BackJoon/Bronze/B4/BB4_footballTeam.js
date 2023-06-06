// 2023-06-06
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n');
let answer=[];
input.forEach(v=>{
    let temp = v.split("")
    temp.forEach((val, i)=>{
        switch (val){
            case 'i':
                temp[i]='e'
                break;
            case 'e':
                temp[i]='i'
                break;
            case 'I':
                temp[i]='E'
                break;
            case 'E':
                temp[i]='I'
                break;
        }
    })
    answer.push(temp.join(""))
})
console.log(answer.join("\n"))