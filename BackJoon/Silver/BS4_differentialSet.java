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
        Set<Integer> integerSet = new TreeSet<Integer>();
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < num1; i++) {
            integerSet.add(Integer.parseInt(st.nextToken()));
        }

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < num2; i++) {
            int num = Integer.parseInt(st.nextToken());
            if (integerSet.contains(num))
                integerSet.remove(num);
        }
        sb.append(integerSet.size()+"\n");
        for (Integer i : integerSet)
            sb.append(i + " ");

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}

// HashSet으로 했는데 틀려서 TreeSet으로 바꿨더니 맞았다...
// TreeSet은 순서를 보장하고 HashSet은 순서를 보장하지 않아서 틀린거 같다.
