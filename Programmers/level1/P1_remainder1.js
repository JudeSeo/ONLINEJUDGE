// 2021-12-06
function solution(n) {
    let answer = 0;
    let m=[]
    for(let i=2;i<n;i++){
        if((n-1)%i==0){
            m.push(i);
        }
    }
    answer = m[0];
    console.log(answer);
    return answer;
}

solution(10);
solution(12);
solution(21);