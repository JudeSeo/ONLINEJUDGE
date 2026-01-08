// 2022-01-11
function solution(skill, skill_trees) {
    let answer = 0;
    answer = skill_trees.filter(value =>
        skill.indexOf(value.split('').filter(v => skill.split('').includes(v)).join('')) === 0).length;
    console.log(answer);
    return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]); // 2
solution("CBD", ["CAD"]); // 0
solution("CBD", ["AEF", "ZJW"]); // 2
solution("REA", ["REA", "POA"]); // 1
solution("CBDK", ["CB", "CXYB", "BD", "AECD", "ABC", "AEX", "CDB", "CBKD", "IJCB", "LMDK"]); // 4
solution("BDC", ["AAAABACA"]); // 0
solution("CBD", ["C", "D", "CB", "BDA"]); // 2


// 이건 네이버에서 보고 한 풀이인데.... 진짜 잘 만들어진 풀이 같다...