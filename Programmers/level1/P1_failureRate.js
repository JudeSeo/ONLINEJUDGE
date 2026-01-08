// 2022-01-06
function solution(N, stages) {
    let answer = [];
    let failLength = new Array(N).fill(0);
    stages.forEach(value => {
        failLength[value-1] = (failLength[value-1] || 0) + 1
    });
    failLength = failLength.slice(0, N)
    
    console.log(failLength);
    return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4, 4, 4, 4, 4]);