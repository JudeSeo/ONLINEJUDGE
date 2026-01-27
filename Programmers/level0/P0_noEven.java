// 2026-01-27
package Programmers.level0;

public class P0_noEven {
    public static void main(String[] args) {
        System.out.println(solution(1));
        System.out.println(solution(15));
    }

    public static int[] solution(int n) {
        int[] answer;
        if (n % 2 == 0) answer = new int[n / 2];
        else answer = new int[n / 2 + 1];
        for (int i = 1; i <= n; i += 2) {
            answer[i / 2] = i;
        }
        return answer;
    }
}
