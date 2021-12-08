class P2_124 {
	public static String solution(int n) {
		String answer = "";
		int[] third = new int[32];
		int a = 0, num = n;
		while (num != 0) {
			if (num % 3 != 0) {
				a = num % 3;
				num /= 3;
			} else {
				a = 4;
				num = (num - 1) / 3;
			}
			answer = Integer.toString(a) + answer;
		}
		System.out.println(answer);
		return answer;
	}

	public static void main(String[] args) {
		solution(5);
		solution(7);
		solution(10);
		solution(15);
	}
}