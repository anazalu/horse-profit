import { Card, CardContent, CardActions, Checkbox, Typography, Button, Grid, TextField, FormControlLabel, Divider } from '@mui/material';

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

export interface HorseCardProps {
    horse: Horse;
    onBack: (horse: Horse | undefined) => void;
    onLay: (horse: Horse | undefined) => void;
    onCheck: (horse: Horse | undefined) => void;
}

export default HorseCard;
export type { Horse };

export function HorseCard({ horse, onBack, onLay, onCheck }: HorseCardProps) {

    return (

        <Card>
            <CardContent>
                <Grid container spacing={1} key={horse.horseId}>
                    <Grid item xs={2}>
                        <Typography variant="body1">{horse.horseName}</Typography>
                        <Typography variant="body2">{horse.odds.toFixed(2)}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <TextField
                            type="text"
                            label="Stake"
                            style={{ height: '4px' }}
                            value={horse.stake} />
                            {/* <input type='number' placeholder='' value={stake} onChange={(e) => setStake(e.target.value)} */}
                    </Grid>
                    <Grid item xs={0.8}>
                        <TextField
                            type="number"
                            label="Step"
                            style={{ height: '4px' }}
                            value={horse.step}
                            // onChange={(e) => setStep()}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard" />
                    </Grid>
                    <Grid item xs={1}>
                        <TextField
                            id="standard-basic"
                            type="text"
                            label="Profit"
                            style={{ height: '4px' }}
                            InputProps={{
                                readOnly: true,
                            }}
                            value={horse.profit} />
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" onClick={() => onBack(horse)}>Back</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" onClick={() => onLay(horse)}>Lay</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <FormControlLabel control={<Checkbox />} label="Multibet" onChange={() => onCheck(horse)} />
                        {/* <input type='checkbox' checked={multiBet} value={~~multiBet} onChange={(e) => onCheck(e.currentTarget.checked)} /> */}

                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                {/* Additional actions can be added here */}
            </CardActions>
        </Card>
    );
}
