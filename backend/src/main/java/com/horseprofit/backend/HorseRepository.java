package com.horseprofit.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface HorseRepository extends JpaRepository<Horse, Long> {
    List<Horse> findAllByRaceId(Long raceId);
    Optional<Horse> findByRaceIdAndHorseId(Long raceId, Long horseId);
}
