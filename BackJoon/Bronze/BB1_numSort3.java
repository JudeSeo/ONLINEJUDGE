package BackJoon.Bronze;
import java.io.*;
import java.util.*;

public class BB1_numSort3 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        int num1 = Integer.parseInt(br.readLine());
        int[] arr = new int[10001];

        for (int i = 0; i < num1; i++) {
            arr[Integer.parseInt(br.readLine())]++;
        }
        for (int i = 1; i < 10001; i++) {
            while (arr[i] > 0) {
                sb.append(i).append("\n");
                arr[i]--;
            }
        }

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}

// sb.append(i+"\n") 쓰면 메모리초과 남
// sb.append(i).append("\n"); 이렇게 사용해야함... 왜지...
