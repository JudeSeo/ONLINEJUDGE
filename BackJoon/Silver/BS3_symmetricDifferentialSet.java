// 2022-06-10
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        int num2 = Integer.parseInt(st.nextToken());
        Set IntegerSet = new HashSet();
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < num1; i++) {
            IntegerSet.add(Integer.parseInt(st.nextToken()));
        }

        int cnt = 0;
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < num2; i++) {
            if (IntegerSet.contains(Integer.parseInt(st.nextToken())))
                cnt++;
        }
        sb.append(num1 + num2 - (cnt * 2));
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
