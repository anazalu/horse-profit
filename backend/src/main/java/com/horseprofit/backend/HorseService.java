package com.horseprofit.backend;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class HorseService {
    private final HorseRepository horseRepository;

    public HorseService(HorseRepository horseRepository) {
        this.horseRepository = horseRepository;
    }

    public List<Horse> getAllHorses(Long raceId) {
        // Implement logic to fetch horses by raceId from the repository
        return horseRepository.findAllByRaceId(raceId);
    }

    public void horseBet(OrderDTO order) {
        // Implement logic to place a bet on a horse based on the order
    }

    public void horseBet(List<OrderDTO> orders) {
        // Implement logic to place multiple bets on horses based on the orders
    }

    public void cashOut(List<Horse> horses) {
        // Implement logic to cash out bets on the specified horses
    }

    public void moveToTop3() {
        // Implement logic to move horses to the top 3
    }

    public Horse horseUpdate(long raceId, Horse horse) {
        Optional<Horse> horseOldOptional = horseRepository.findByRaceIdAndHorseId(raceId, horse.getHorseId());
        if (horseOldOptional.isPresent()) {
            Horse horseOld = horseOldOptional.get();
            horseOld.setStake(horse.getStake());
            horseOld.setStep(horse.getStep());
            horseOld.setMultiBet(horse.isMultiBet());
            return horseRepository.save(horseOld);
        }
        return new Horse();
    }
}
