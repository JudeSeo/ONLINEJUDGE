// 2022-01-18
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');
input = input.slice(1)
let set = new Set(input);
let arr = new Array()
set.forEach(v=>{
    arr.push(v)
})
arr.sort();
arr.sort((a, b)=>{
    let len = a.length - b.length;
    if(len == 0)
        len = a-b
    return len
})
arr = arr.join('\n')
console.log(arr);