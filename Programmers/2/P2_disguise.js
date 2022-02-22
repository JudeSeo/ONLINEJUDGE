// 2021-12-26
function solution(clothes) {
    var answer = 0;
    var set = new Set();
    for (var i = 0; i < clothes.length; i++) {
        set.add(clothes[i][1])
    }
    if (set.size == 1) {
        answer = clothes.length;
    } else {
        var temp = [];
        for (var j = 0; j < set.size; j++) {
            temp[j] = 0;
            for (var i = 0; i < clothes.length; i++) {
                if (set.has(clothes[i][1])) {
                    temp[j] = temp[j] + 1;
                    console.log(temp)
                }
            }
        }
    }
    console.log(answer);
    return answer;
}

solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]);
solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]);
// solution([
//     ["a", "aa"],
//     ["b", "aa"],
//     ["c", "aa"],
//     ["aa", "bb"],
//     ["bb", "bb"],
//     ["c_c", "bb"],
//     ["aaa", "cc"],
//     ["bbb", "cc"],
//     ["ccc", "cc"]
// ]); // 63
// solution([
//     ["a", "a"],
//     ["b", "b"],
//     ["c", "c"]
// ]); // 7