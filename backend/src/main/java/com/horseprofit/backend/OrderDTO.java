package com.horseprofit.backend;

import lombok.Data;

@Data
public class OrderDTO {
    private Long raceId;
    private Long horseId;
    private double stake;
    private int step;
    private String betType; // "back" or "lay"
}
