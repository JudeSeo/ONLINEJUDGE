// 2022-01-14 -> 2022-01-15
function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    var temp = {}
    var set = new Set(report);
    set.forEach(value => {
        var reported = value.split(" ")[1];
        temp[reported] = (temp[reported] || 0) + 1
    });
    set.forEach(item => {
        var tmp1 = item.split(" ")[1]
        if (temp[tmp1] >= k && item.includes(tmp1)) {
            answer[id_list.indexOf(item.split(" ")[0])] += 1;
        }
    });
    console.log(answer);
    return answer;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2); //[2,1,1,0]
solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3); //[0,0]


//시간초과로 안 풀려서 고민했는데...
// filter 썼던거 set으로 변경하니까 잘 됐다!