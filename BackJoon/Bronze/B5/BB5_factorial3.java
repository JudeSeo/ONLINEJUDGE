// 2023-05-16
import java.util.Scanner;
import java.math.BigInteger;

public class Main {

    private static final int SIMPLE_THRESHOLD = 10;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.close();

        System.out.println(factorial(n));
    }

    private static BigInteger factorial(int n) {
        return sub_fact(1, n);
    }
    private static BigInteger sub_fact(int a, int b) {
        // 간단한 factorial 함수들은 그냥 원래 방식대로 실행
        // SIMPLE_THRESHOLD 값 자체는 크게 영향을 주지 않는 것 같다
        if ((b - a) < SIMPLE_THRESHOLD) {
            BigInteger result = BigInteger.ONE;
            for (int i = a; i <= b; i++) {
                result = result.multiply(BigInteger.valueOf(i));
            }
            return result;
        } else {
            int mid = a + (b - a) / 2;
            return sub_fact(a, mid).multiply(sub_fact(mid + 1, b));
        }
    }
}