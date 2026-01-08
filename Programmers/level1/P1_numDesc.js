function solution(n) {
    let answer = 0;
    let b=[];
    let a = n.toString();
    for(let i=0;i<a.length;i++){
        b.push(a.substr(i,1));
    }
    b.sort().reverse();
    answer = parseInt(b.toString().replace(/,/gi,""));
    console.log(answer);
    return answer;
}

solution(118372);