// 2022-01-02
function solution(n, lost, reserve) {
    let answer = 0;
    let arr=[]
    answer = n - lost.length;
    lost.sort();
    reserve.sort();
    lost.forEach(value => {
        if (reserve.includes(value)) {
            answer += 1;
            arr.push(lost.indexOf(value))
            reserve.splice(reserve.indexOf(value), 1)
        }
    });
    arr.reverse()
    arr.forEach(value=>{
        lost.splice(value,1)
    })
    lost.forEach(value => {
        if (reserve.includes(value - 1)) {
            answer += 1;
            reserve.splice(reserve.indexOf(value - 1), 1)
        } else if (reserve.includes(value + 1)) {
            answer += 1;
            reserve.splice(reserve.indexOf(value + 1), 1)
        }
    });
    console.log(answer);
    return answer;
}

solution(5, [2, 4], [1, 3, 5]);
solution(5, [2, 4], [3]);
solution(3, [3], [1]);
solution(3, [1, 2], [2, 3]);
solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10]);
solution(5, [1, 2, 3], [2, 3, 4]);
solution(8, [1, 2, 4, 6], [1, 2, 4, 6]);

// 굉장히 더럽게 짜졌다....
// 잘 생각하면 좀 더 짧고 간단하게 풀 수 있을거 같은데...