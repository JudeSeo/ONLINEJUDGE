// 2026-01-26
package Programmers.level0;

public class P0_addDivision {
    public static void main(String[] args) {
        System.out.println(solution(1, 2, 3, 4));
        System.out.println(solution(9, 2, 1, 3));
    }

    public static int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int bottom = denom1 * denom2;
        int top = numer1 * denom2 + numer2 * denom1;
        int min = Math.min(top, bottom);
        for (int i = min; i >= 2; i--) {
            if (top % i == 0 && bottom % i == 0) {
                top /= i;
                bottom /= i;
                break;
            }
        }
        int[] answer = {top, bottom};
        return answer;
    }
}
