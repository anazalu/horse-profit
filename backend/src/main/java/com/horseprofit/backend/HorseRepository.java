package com.horseprofit.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HorseRepository extends JpaRepository<Horse, Long> {
    List<Horse> findAllByRaceId(Long raceId);
}
