import { Checkbox, Typography, Button, Grid, TextField, FormControlLabel, Box } from '@mui/material';
import { useState } from 'react';

interface Horse {
    horseId: number;
    raceId: number;
    odds: number;
    horseName: string;
    stake: number;
    step: number;
    profit: number;
}

interface Bet {
    raceId: number;
    horseId: number;
    stake: number;
    step: number;
    betType: string;
}

interface HorseCardProps {
    horse: Horse;
    onBack: (bet: Bet | undefined) => void;
    onLay: (bet: Bet | undefined) => void;
    onCheck: (horseId: number, isChecked: boolean) => void;
}

export default HorseCard;
export type { Horse, Bet };

export function HorseCard({ horse, onBack, onLay, onCheck }: HorseCardProps) {
    const [stake, setStake] = useState<number>(0);
    const [step, setStep] = useState<number>(0);
    const [multiBet, setMultiBet] = useState<boolean>(false);

    const handleMultiBet = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMultiBet(event.target.checked);
        onCheck(horse.horseId, event.target.checked);
    };

    return (
        <Box sx={{ flexGrow: 2 }} margin={1} >
            <Grid container spacing={1} columnSpacing={1} rowSpacing={1} key={horse.horseId}>
                <Grid item xs={2}>
                    <Typography variant="body1">{horse.horseName}</Typography>
                    <Typography variant="body2">{horse.odds.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        type="text"
                        label="Stake"
                        size="small"
                        value={stake}
                        onChange={(e) => setStake(~~e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        type="number"
                        label="Step"
                        size="small"
                        value={step}
                        onChange={(e) => setStep(~~e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body2">Profit: </Typography>
                    <Typography variant="body2">{horse.profit.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={() => {
                        onBack({
                            raceId: horse.raceId,
                            horseId: horse.horseId,
                            stake: stake || 0,
                            step: step || 0,
                            betType: 'back'
                        })
                        // setStake(0);
                        // setStep(0)
                    }}>Back</Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={() => {
                        onLay({
                            raceId: horse.raceId,
                            horseId: horse.horseId,
                            stake: stake || 0,
                            step: step || 0,
                            betType: 'lay'
                        })
                        // setStake(0);
                        // setStep(0)
                    }}>Lay</Button>
                </Grid>
                <Grid item xs={1}>
                    <FormControlLabel control={<Checkbox checked={multiBet} onChange={handleMultiBet} />} label="Multibet" />
                </Grid>
            </Grid>
        </Box>
    );
}
