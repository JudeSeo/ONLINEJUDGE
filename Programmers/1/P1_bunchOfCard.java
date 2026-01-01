// 2026-01-01
package Programmers;

class P1_bunchOfCard {
    public static void main(String[] args) {
        String[] card1 = {"i", "drink", "water"};
        String[] card2 = {"want", "to"};
        String[] goals = {"i", "want", "to", "drink", "water"};
        System.out.println(solution(card1, card2, goals));
        card1 = new String[]{"i", "water", "drink"};
        System.out.println(solution(card1, card2, goals));
    }

    public static String solution(String[] cards1, String[] cards2, String[] goal) {
        String answer = "";
        int i = 0, j = 0, k = 0;
        while (goal.length != k) {
            if (i < cards1.length && goal[k].equals(cards1[i])) {
                k++;
                i++;
            } else if (j < cards2.length && goal[k].equals(cards2[j])) {
                k++;
                j++;
            } else {
                answer = "No";
                break;
            }
        }
        if (answer.equals("")) answer = "Yes";
        return answer;
    }
}