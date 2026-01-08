// 2024-02-26
function solution(name, yearning, photo) {
    let answer = [];
    let arr = {};
    name.forEach((v, i) => {
        arr = {
            ...arr,
            [v]: yearning[i]
        }
    })
    photo.forEach(v => {
        let sum = 0;
        v.forEach(val => {
            sum += arr[val] ?? 0;
        })
        answer.push(sum);
    })
    console.log(answer);
    return answer;
}

solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])