import java.util.*;

public class ejercicio2 {
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Ingresar el número de teléfono
        String numeros = "23"; 
        
        List<String> combinaciones = solution.letterCombinations(numeros);
        
        // Imprime las combinaciones resultantes
        System.out.println("Combinaciones para el número " + numeros + ":");
        for (String combinacion : combinaciones) {
            System.out.println(combinacion);
        }
    }
}

class Solution {
    public List<String> letterCombinations(String numeros) {
        if (numeros.isEmpty()) return Collections.emptyList();

        String[] mapLetras = {
            "abc", 
            "def", 
            "ghi", 
            "jkl", 
            "mno", 
            "pqrs", 
            "tuv", 
            "wxyz"
        };
        List<String> salida = new ArrayList<>();
        buscarCombinacion("", numeros, mapLetras, salida);
        return salida;
    }

    private void buscarCombinacion(String combinacion, String numerosSig, String[] mapLetras, List<String> salida) {
        if (numerosSig.isEmpty()) {
            salida.add(combinacion);
        } else {
            String letras = mapLetras[numerosSig.charAt(0) - '2'];
            for (char letra : letras.toCharArray()) {
                buscarCombinacion(combinacion + letra, numerosSig.substring(1), mapLetras, salida);
            }
        }
    }
}
