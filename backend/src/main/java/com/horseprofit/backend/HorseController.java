package com.horseprofit.backend;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/horses")
public class HorseController {
    private final HorseService horseService;

    public HorseController(HorseService horseService) {
        this.horseService = horseService;
    }

    @GetMapping("/{raceId}")
    public List<Horse> getAllHorses(@PathVariable Long raceId) {
        return horseService.getAllHorses(raceId);
    }

    @PostMapping("/bet")
    public BetDTO horseBet(@RequestBody BetDTO bet) {
        horseService.horseBet(bet);
        return bet;
    }

    @PostMapping("/multibet")
    public void horseBet(@RequestBody MultiBetDTO multiBet) {
        horseService.horseMultiBet(multiBet);
    }

    @PostMapping("/{raceId}/cashout")
    public void cashOut(@PathVariable Long raceId) {
        horseService.cashOut(raceId);
    }

    @PostMapping("/{raceId}/top3")
    public void moveToTop3(@PathVariable Long raceId) {
        horseService.moveToTop3(raceId);
    }
}
