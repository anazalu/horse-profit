package com.horseprofit.backend;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    @Autowired
    private HorseRepository horseRepository;

    @Override
    public void run(String... args) throws Exception {
        Random random = new Random();
        for (long i = 1; i <= 20; i++) {
            long raceId = (i <= 10) ? 1L : 2L;
            String horseName = "Horse " + i;
            double odds = 1.0 + random.nextDouble();
            Horse horse = new Horse(raceId, horseName, odds, 0.0, 0, 0.0, false);
            horseRepository.save(horse);
        }
    }
}
