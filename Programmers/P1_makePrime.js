// 2021-12-17
function solution(nums) {
    var answer = 0;
    var arr = [];
    nums.sort();
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                arr.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    arr.forEach(function (value, index) {
        var cnt = 0;
        for (var i = 2; i < value; i++) {
            if (value % i == 0)
                cnt++
        }
        if (cnt == 0)
            answer++;
    });
    console.log(answer)
    return answer;
}

solution([1, 2, 3, 4]);
solution([1, 2, 7, 6, 4]);
// 에라토스트네스의 체를 사용하면 더 좋은 코드를 짤 수 있을거 같지만 아직은 어려워서 노가다로 풀었다.