package com.horseprofit.backend;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Horse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long horseId;
    private Long raceId;
    private String horseName;
    private double odds;
    private double stake;
    private int step;
    private double profit;

    public Horse(Long raceId, String horseName, double odds, double stake, int step, double profit) {
        this.raceId = raceId;
        this.horseName = horseName;
        this.odds = odds;
        this.stake = stake;
        this.step = step;
        this.profit = profit;
    }
}
