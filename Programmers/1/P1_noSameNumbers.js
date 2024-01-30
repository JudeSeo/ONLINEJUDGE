// 2021-11-14
function solution(arr)
{
    let answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] != arr[i+1])
        answer.push(arr[i]);
    }
    console.log(answer);
    return answer;
}

solution([1,1,3,3,0,1,1]);
solution([4,4,4,3,3]);