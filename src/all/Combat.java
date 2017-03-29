package all;

public class Combat {

    int combatExperience;
    double combatSkill;
    int combatsPerDay;
    int combatsNeed;
    int combatsNow;

    public Combat(int combatExperience,
                  double combatSkill,
                  int combatsPerDay,
                  int combatsNeed) {
        this.combatExperience = combatExperience;
        this.combatSkill = combatSkill;
        this.combatsPerDay = combatsPerDay;
        this.combatsNeed = combatsNeed;
        this.combatsNow = 0;
    }
}