package all;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MainClass {


    public static void main(String[] args) throws IOException {

        double tekymka;
        double perekach;
        int ostatokopita;
        int vidovboev;
        int k = 0;
        int g;
        int count = 0;

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Введите текущую умку");
        tekymka = Double.parseDouble(reader.readLine());

        System.out.println("Введите перекач(более 100 если вы получаете доп опыт)");
        perekach = Double.parseDouble(reader.readLine());

        System.out.println("Введите остаток опыта");
        ostatokopita = Integer.parseInt(reader.readLine());

        System.out.println("Введите кол-во видов боёв");
        vidovboev = Integer.parseInt(reader.readLine());

        Battle[] massiv = new Battle[vidovboev];

        for (int i = 0; i < vidovboev; i++) {

            System.out.println("Введите опыт за " + (i + 1) + " вид боя");
            int boiopit = Integer.parseInt(reader.readLine());

            System.out.println("Введите умку за " + (i + 1) + " вид боя");
            double boiymka = Double.parseDouble(reader.readLine());

            System.out.println("Введите количество боёв " + (i + 1) + " вида в день");
            int boevvden = Integer.parseInt(reader.readLine());

            System.out.println("Сколько всего боев " + (i + 1) + " вида надо сыграть за уровень");
            int nadoboev = Integer.parseInt(reader.readLine());

            massiv[i] = new Battle(boiopit, boiymka, boevvden, nadoboev);

        }


        for (int i = 0; i < vidovboev; i++) {
            if (perekach > 100) {
                massiv[i].boiopit = (int) round((massiv[i].boiopit / perekach * 100), 0);
            }
            k += massiv[i].boiopit * massiv[i].boevvden;
            count += massiv[i].nadoboev;
        }
        int symma = 0;
        while ((ostatokopita > (k * perekach / 100)) && (symma != count)) {
            for (int i = 0; i < vidovboev; i++) {
                g = 0;
                while ((g < massiv[i].boevvden) && (massiv[i].tekboev < massiv[i].nadoboev)) {
                    massiv[i].tekboev++;
                    g++;
                    symma++;
                    if (perekach > 100) {
                        ostatokopita -= (int)round((massiv[i].boiopit * perekach / 100), 0);
                    } else ostatokopita -= massiv[i].boiopit;
                    perekach += (perekach / tekymka * massiv[i].boiymka);
                    tekymka += massiv[i].boiymka;
                }
            }
        }
        System.out.println("Опыта осталось " + ostatokopita);
        if (perekach > 100) System.out.println("Перекач +" + round((perekach % 100),2) + "%");
        else System.out.println("В норме, " + round(perekach,2) + "%");
        System.out.println("Умки теперь " + round(tekymka,2));
        for (int i = 0; i < vidovboev; i++) {
            System.out.println("Количество боёв " + (i + 1) + " вида за уровень = " + massiv[i].tekboev);
        }

    }

    private static double round(double number, int scale) {
        int pow = 10;
        for (int i = 1; i < scale; i++)
            pow *= 10;
        if (scale == 0) pow = 1;
        double tmp = number * pow;
        return (double) (int) ((tmp - (int) tmp) >= 0.5f ? tmp + 1 : tmp) / pow;
    }


}
