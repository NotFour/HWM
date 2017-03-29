package all;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class MainClass {

    public static void main(String[] args) throws IOException {

        double skillsNow;
        double overheat;
        int remainsExperience;
        int kindCombats;
        int k = 0;
        int g;
        int count = 0;

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Введите текущую умку");
        skillsNow = Double.parseDouble(reader.readLine());

        System.out.println("Введите перекач(более 100 если вы получаете доп опыт)");
        overheat = Double.parseDouble(reader.readLine());

        System.out.println("Введите остаток опыта");
        remainsExperience = Integer.parseInt(reader.readLine());

        System.out.println("Введите кол-во видов боёв");
        kindCombats = Integer.parseInt(reader.readLine());

        Combat[] massiv = new Combat[kindCombats];

        for (int i = 0; i < kindCombats; i++) {

            System.out.println("Введите опыт за " + (i + 1) + " вид боя");
            int boiopit = Integer.parseInt(reader.readLine());

            System.out.println("Введите умку за " + (i + 1) + " вид боя");
            double boiymka = Double.parseDouble(reader.readLine());

            System.out.println("Введите количество боёв " + (i + 1) + " вида в день");
            int boevvden = Integer.parseInt(reader.readLine());

            System.out.println("Сколько всего боев " + (i + 1) + " вида надо сыграть за уровень");
            int nadoboev = Integer.parseInt(reader.readLine());

            massiv[i] = new Combat(boiopit, boiymka, boevvden, nadoboev);
        }

        for (int i = 0; i < kindCombats; i++) {
            if (overheat > 100) {
                massiv[i].combatExperience = (int) round((massiv[i].combatExperience / overheat * 100), 0);
            }
            k += massiv[i].combatExperience * massiv[i].combatsPerDay;
            count += massiv[i].combatsNeed;
        }
        int sum = 0;
        while ((remainsExperience > (k * overheat / 100)) && (count != sum++)) {
            for (int i = 0; i < kindCombats; i++) {
                g = 0;
                while ((g++ < massiv[i].combatsPerDay) && (massiv[i].combatsNow < massiv[i].combatsNeed)) {
                    massiv[i].combatsNow++;
                    if (overheat > 100) {
                        remainsExperience -= (int) round((massiv[i].combatExperience * overheat / 100), 0);
                    } else remainsExperience -= massiv[i].combatExperience;
                    overheat += (overheat / skillsNow * massiv[i].combatSkill);
                    skillsNow += massiv[i].combatSkill;
                }
            }
        }
        System.out.println("Опыта осталось " + remainsExperience);
        if (overheat > 100) {
            System.out.println("Перекач +" + round((overheat % 100), 2) + "%");
        } else {
            System.out.println("В норме, " + round(overheat, 2) + "%");
        }
        System.out.println("Умки теперь " + round(skillsNow, 2));
        for (int i = 0; i < kindCombats; i++) {
            System.out.println("Количество боёв " + (i + 1) + " вида за уровень = " + massiv[i].combatsNow);
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
}+