// Dada una cadena s, hallar la subcadena más larga sin repetir caracteres y su longitud. 
// Ejemplo 1 - Entrada: s = "abcabcbb"
// Salida: La respuesta es "abc", con la longitud de 3.
// Ejemplo 2 - Entrada: s = "bbbbb"
// Salida: La respuesta es "b", con la longitud de 1.
// Ejemplo 3 - Entrada: s = "pwwkew"
// Salida: La respuesta es "wke", de longitud 3.
// Observe que la respuesta debe ser una subcadena, "pwke" es una subsecuencia y no una subcadena.

import java.util.Arrays;
import javax.swing.JOptionPane;
import java.util.Scanner;

public class substring {
    public static void main(String[] args) {

        //String s1 = "abcabcbb", s2 = "bbbbb", s3= "pwwkew" ;

        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduzca la cadena a analizar");
        String x = scanner.nextLine();

        System.out.println("El substring más largo de la cadena " + x + " es: " + substringMasLargo(x) + " de longitud " + substringMasLargo(x).length());
        JOptionPane.showMessageDialog(null, "El substring más largo de la cadena " + x + " es: " + substringMasLargo(x) + " de longitud" + substringMasLargo(x).length());
        
    }

    public static String substringMasLargo(String x){

        int inicio = 0, fin = 0, longitud = 0;
        char caracterActual;
        String cadena = "";

        boolean[] marca = new boolean[256];

        for (int i=0, j=0; j < x.length(); ++j) {
            caracterActual = x.charAt(j);

            while(marca[caracterActual]){
                marca[x.charAt(i++)] = false;
            }

            marca[caracterActual] = true;
            //longitud = Math.max(longitud, j-i+1);

            if(j-i +1 > longitud){
                longitud = j-i+1;
                inicio = i;
                fin = j;
            }
        }

        return x.substring(inicio, fin+1);
    }
    
}