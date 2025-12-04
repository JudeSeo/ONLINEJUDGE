// 2022-06-10
import java.io.*;
import java.util.*;

public class BS3_arraySet {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        int num2 = Integer.parseInt(st.nextToken());
        Set stringSet = new HashSet();

        for (int i = 0; i < num1; i++) {
            st = new StringTokenizer(br.readLine());
            stringSet.add(st.nextToken());
        }
        int cnt = 0;
        for (int i = 0; i < num2; i++) {
            st = new StringTokenizer(br.readLine());
            if (stringSet.contains(st.nextToken()))
                cnt++;
        }

        sb.append(cnt);
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}


// 배열로 풀었는데... 틀려서 검색해보니까 set으로 푸는게 더 효율적으로 보여서 바꿨음 
