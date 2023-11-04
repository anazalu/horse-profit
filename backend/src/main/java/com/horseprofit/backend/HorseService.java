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
        return horseRepository.findAllByRaceId(raceId);
    }

    public void horseBet(BetDTO bet) {
        Optional<Horse> horseOptional = horseRepository.findByRaceIdAndHorseId(bet.getRaceId(), bet.getHorseId());
        if (horseOptional.isPresent()) {
            Horse horse = horseOptional.get();
            horse.setProfit(bet.getStake() * horse.getOdds()); // calculate a fake profit amount
            horseRepository.save(horse);
        }
    }

    public void horseMultiBet(MultiBetDTO multiBet) {
        for (Long horseId: multiBet.getHorseIds()) {
            Optional<Horse> horseOptional = horseRepository.findByRaceIdAndHorseId(multiBet.getRaceId(), horseId);
            if (horseOptional.isPresent()) {
                Horse horse = horseOptional.get();
                horse.setProfit(multiBet.getStake() / multiBet.getHorseIds().size()); // calculate a fake profit amount
                horseRepository.save(horse);
            }
        }
    }

    public void cashOut(List<Horse> horses) {
        // ?
    }

    public void moveToTop3() {
        // ?
    }
}
