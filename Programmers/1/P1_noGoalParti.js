// 2012-12-15
function solution(participant, completion) {
    let answer = '';
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] != completion[i]) {
            answer = participant[i];
            break;
        }
    }
    console.log(answer);
    return answer;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]);
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

//효율성 때문에 sort 한 후 비교해야함