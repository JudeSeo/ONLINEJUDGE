// 2021-11-13
function solution(numbers) {
    var answer = 0;
    for(var i=0;i<10;i++){
        if(!numbers.includes(i))
            answer += i
    }
    console.log(answer);
    return answer;
}

solution([1,2,3,4,6,7,8,0]);