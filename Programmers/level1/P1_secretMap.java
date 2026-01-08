// 2026-01-08
package Programmers.level1;

public class P1_secretMap {
    public static void main(String[] args) {
        int[] arr1 = {9, 20, 28, 18, 11};
        int[] arr2 = {30, 1, 21, 17, 28};
        System.out.println(solution(5, arr1, arr2));
    }

    public static String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
        String format = "%" + n + "s";
        for (int i = 0; i < n; i++) {
            int temp = (arr1[i] | arr2[i]);
            answer[i] = String.format(format, Integer.toBinaryString(temp))
                    .replaceAll("1", "#").replaceAll("0", " ");
        }
        return answer;
    }
}
