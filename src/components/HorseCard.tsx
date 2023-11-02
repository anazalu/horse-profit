import { Card, CardContent, CardActions, Checkbox, Typography, Button, Grid, TextField, FormControlLabel, Divider, Box } from '@mui/material';
import { useState } from 'react';

interface Horse {
    horseId: number;
    raceId: number;
    odds: number;
    horseName: string;
    stake: number;
    step: number;
    profit: number;
    isMultiBet: boolean;
}

interface Order {
    raceId: number;
    horseId: number;
    stake: number;
    step: number;
    betType: string;
}

export interface HorseCardProps {
    horse: Horse;
    onBack: (order: Order | undefined) => void;
    onLay: (order: Order | undefined) => void;
    // onCheck: (order: Order | undefined) => void;
}

export default HorseCard;
export type { Horse, Order };

export function HorseCard({ horse, onBack, onLay }: HorseCardProps) {
    const [stake, setStake] = useState<number>()
    const [step, setStep] = useState<number>()

    return (
        <Box sx={{ flexGrow: 2 }} margin="normal" >
            <Grid container spacing={1} key={horse.horseId}>
                <Grid item xs={2}>
                    <Typography variant="body1">{horse.horseName}</Typography>
                    <Typography variant="body2">{horse.odds.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        type="text"
                        label="Stake"
                        placeholder=''
                        value={stake}
                        onChange={(e) => setStake(~~e.target.value)} />
                </Grid>
                <Grid item xs={0.8}>
                    <TextField
                        type="number"
                        label="Step"
                        value={step}
                        onChange={(e) => setStep(~~e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard" />
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body2">Profit: </Typography>
                    <Typography variant="body2">{horse.profit}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={() => onBack({
                        raceId: horse.raceId,
                        horseId: horse.horseId,
                        stake: stake || 0,
                        step: step || 0,
                        betType: 'back'
                    })}>Back</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={() => onLay({
                        raceId: horse.raceId,
                        horseId: horse.horseId,
                        stake: stake || 0,
                        step: step || 0,
                        betType: 'lay'
                    })}>Lay</Button>
                </Grid>
                <Grid item xs={1}>
                    <FormControlLabel control={<Checkbox />} label="Multibet"
                    //  onChange={() => onCheck(horse)} 
                    />
                    {/* <input type='checkbox' checked={multiBet} value={~~multiBet} onChange={(e) => onCheck(e.currentTarget.checked)} /> */}

                </Grid>
            </Grid>

        </Box>
    );
}
