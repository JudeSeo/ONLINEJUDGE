// 2021-11-19
function solution(s) {
    let answer = '';
    let a=[];
    for(let i=0;i<s.length;i++){
        a.push(s.substr(i,1));
    }
    a.sort().reverse();
    answer = a.toString().replace(/,/gi,"");
    console.log(answer);
    return answer;
}

solution("Zbcdefg");