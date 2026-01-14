// 2026-01-14
package Programmers.level1;

import java.util.Arrays;

public class P1_fameHall1 {
    public static void main(String[] args) {
        solution(10, new int[]{10, 100, 20, 150, 1, 100, 200});
        solution(4, new int[]{0, 300, 40, 300, 20, 70, 150, 50, 500, 1000});
    }

    public static int[] solution(int k, int[] score) {
        int[] answer = {};
        if (k > score.length) {
            answer = new int[score.length];
            int[] arr = new int[k];
            int min = 2000;
            for (int i = 0; i < score.length; i++) {
                arr[i] = score[i];
                min = Math.min(min, arr[i]);
                answer[i] = min;
            }
        } else {
            answer = new int[score.length];
            int[] arr = new int[k];
            int min = 2000;
            for (int i = 0; i < k; i++) {
                arr[i] = score[i];
                min = Math.min(min, arr[i]);
                answer[i] = min;
            }
            Arrays.sort(arr);
            for (int i = k; i < score.length; i++) {
                arr[0] = Math.max(arr[0], score[i]);
                Arrays.sort(arr);
                answer[i] = arr[0];
            }
        }
        return answer;
    }
}
