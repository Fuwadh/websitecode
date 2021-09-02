
package Anisulbeginner.java;

import java.util.Scanner;


public class TemperatureDemo2 {
    
    public static void main(String[] args) {
        
        Scanner input = new Scanner(System.in);
        double farn,cels;
        
        System.out.print("Fahrenheit = ");
        farn = input.nextDouble();
        
        cels = 0.56 * (farn - 32);
        System.out.println("Celcious :"+ cels);
    }
}
