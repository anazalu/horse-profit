package com.horseprofit.backend;

import java.util.List;

import lombok.Data;

@Data
public class MultiBetDTO {
    private Long raceId;
    private double stake;
    private String betType; // "back" or "lay"
    List<Long> horseIds;
}
