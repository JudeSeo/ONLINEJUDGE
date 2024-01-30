// 2021-11-16
function solution(numbers) {
    let answer = [];
    let setAnswer = new Set();
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            setAnswer.add(numbers[i]+numbers[j]);
        }
    }
    setAnswer.forEach((value) =>{
        answer.push(value);
    });
    answer.sort(function(a,b){
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
    console.log(answer);
    return answer;
}

solution([5,0,2,7]);