// 2021-11-13
function solution(numbers) {
    let answer = 0;
    for(let i=0;i<10;i++){
        if(!numbers.includes(i))
            answer += i
    }
    console.log(answer);
    return answer;
}

solution([1,2,3,4,6,7,8,0]);