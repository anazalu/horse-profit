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
    public void horseBet(@RequestBody OrderDTO order) {
        horseService.horseBet(order);
    }

    @PostMapping("/bets")
    public void horseBet(@RequestBody List<OrderDTO> orders) {
        horseService.horseBet(orders);
    }

    @PostMapping("/cashout")
    public void cashOut(@RequestBody List<Horse> horses) {
        horseService.cashOut(horses);
    }

    @PostMapping("/moveTop3")
    public void moveToTop3() {
        horseService.moveToTop3();
    }
}
