import { Checkbox, Typography, Button, Grid, TextField, FormControlLabel, Box, IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
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
    multiBetSet: Set<number>;
    onBack: (bet: Bet | undefined) => void;
    onLay: (bet: Bet | undefined) => void;
    onCheck: (horseId: number, isChecked: boolean) => void;
}

export default HorseCard;
export type { Horse, Bet };

export function HorseCard({ horse, multiBetSet, onBack, onLay, onCheck }: HorseCardProps) {
    const [stakeBack, setStakeBack] = useState<number>(0);
    const [stepBack, setStepBack] = useState<number>(0);
    const [stakeLay, setStakeLay] = useState<number>(0);
    const [stepLay, setStepLay] = useState<number>(0);
    // const [multiBet, setMultiBet] = useState<boolean>(false);

    const handleMultiBet = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setMultiBet(event.target.checked);
        onCheck(horse.horseId, event.target.checked);
    };

    return (
        <Box margin={1} >
            <Grid container spacing={1} columnSpacing={1} rowSpacing={1} key={horse.horseId}>
                <Grid item xs={1}>
                    <Typography variant="body1">{horse.horseName}</Typography>
                    <Typography variant="body2">{horse.odds.toFixed(2)}</Typography>
                </Grid>

                <Grid item xs={3} >
                    <Button variant="contained" onClick={() => { setStakeBack(1) }}>1</Button>
                    <Button variant="contained" onClick={() => { setStakeBack(2) }}>2</Button>
                    <Button variant="contained" onClick={() => { setStakeBack(5) }}>5</Button>
                    <Button variant="contained" onClick={() => { setStakeBack(10) }}>10</Button>
                </Grid>

                <Grid item xs={1}>
                    <TextField
                        type="text"
                        label="Stake"
                        size="small"
                        value={stakeBack}
                        onChange={(e) => setStakeBack(~~e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={1}>
                    <TextField
                        type="number"
                        label="Step"
                        size="small"
                        value={stepBack}
                        onChange={(e) => setStepBack(~~e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <Button onClick={() => { setStepBack(0) }}>Clear</Button>
                </Grid>

                <Grid item xs={1}>
                    <Button variant="contained" onClick={() => {
                        onBack({
                            raceId: horse.raceId,
                            horseId: horse.horseId,
                            stake: stakeBack || 0,
                            step: stepBack || 0,
                            betType: 'back'
                        })
                    }}>Back</Button>
                </Grid>

                <Grid item xs={1}>
                    <TextField
                        type="number"
                        label="Stake"
                        size="small"
                        value={stakeLay}
                        onChange={(e) => setStakeLay(~~e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={1}>
                    <TextField
                        type="number"
                        label="Step"
                        size="small"
                        value={stepLay}
                        onChange={(e) => setStepLay(~~e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>

                <Grid item xs={1}>
                    <Button variant="contained" onClick={() => {
                        onLay({
                            raceId: horse.raceId,
                            horseId: horse.horseId,
                            stake: stakeLay || 0,
                            step: stepLay || 0,
                            betType: 'lay'
                        })
                    }}>Lay</Button>
                </Grid>

                <Grid item xs={1}>
                    <Typography variant="body2">Profit: </Typography>
                    <Typography variant="body2">{horse.profit.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <FormControlLabel control={<Checkbox checked={multiBetSet.has(horse.horseId)} onChange={handleMultiBet} />} label="Multibet" />
                </Grid>
            </Grid>
        </Box >
    );
}
