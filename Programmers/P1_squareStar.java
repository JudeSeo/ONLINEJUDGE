// 2021-12-09
import java.util.Scanner;
public class P1_squareStar {
	public static void solution(){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
    // public static void solution(int a, int b){
        for(int i=0;i<b;i++){
            for(int j=0;j<a;j++){
                System.out.print("*");
            }
            System.out.println();
        }
	}

	public static void main(String[] args) {
        solution();
        // solution(3,5);
        // solution(5,3);
        // solution(7, 10);
	}
}
