// 2026-01-26
package Programmers.level0;

public class P0_findCompositionNum {
    public static void main(String[] args) {
        System.out.println(solution(10));
        System.out.println(solution(15));
        System.out.println(solution(1));
    }

    public static int solution(int n) {
        int answer = Math.max(n / 2 - 1, 0);
        for (int i = 9; i <= n; i += 2) {
            for (int j = 3; j < i; j++) {
                if (i % j == 0) {
                    answer++;
                    break;
                }
            }
        }
        return answer;
    }
}
