

package Anisulbeginner.java;

import java.util.Scanner;


public class LoopDemo34 {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        int sum = 0;
        int m,n;
        System.out.print("Enter Initial number :");
        m = input.nextInt();
        
        System.out.print("Enter final number:");
        n = input.nextInt();
        for (int i = m; i <= n; i++) {
            
            if(i%2==0){
                  sum = sum + i;
                  System.out.print("  "+i);
                
            }
          
            
        }
        System.out.println();
        System.out.println("sum : " + sum);
        
        
    }
}
