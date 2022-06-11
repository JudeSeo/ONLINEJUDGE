// 2022-06-11
import java.io.*;
import java.util.*;

public class BS5_peopleInOffice {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        NavigableSet<String> peopleSet = new TreeSet<String>();
        for (int i = 0; i < num1; i++) {
            st = new StringTokenizer(br.readLine());
            String name = st.nextToken();
            String move = st.nextToken();
            if (move.equals("enter"))
                peopleSet.add(name);
            else
                peopleSet.remove(name);
        }

        for (String s : peopleSet.descendingSet()) {
            sb.append(s + "\n");
        }

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}

// 맞았는데.... node.js로 돌려서 런타임에러 떴었네...
// 거기다 클래스명도 Main으로 안했었다...