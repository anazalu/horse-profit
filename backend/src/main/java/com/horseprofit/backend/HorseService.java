package com.horseprofit.backend;

import org.springframework.stereotype.Service;
import java.util.List;

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
}
