import { Card, CardContent, CardActions, Checkbox, Typography, Button, Grid, TextField, FormControlLabel } from '@mui/material';

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

export interface HorseProps {
    horse: Horse;
}

export default HorseCard;
export type { Horse };

export function HorseCard({ horse }: HorseProps) {
    const doNothing = () => {
        console.log('Do nothing.');
    };

    const multiBet = () => {
    };

    return (

        <Card>
            <CardContent>
                <Grid container spacing={2} key={horse.horseId}>
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
                    </Grid>
                    <Grid item xs={0.8}>
                        <TextField
                            type="number"
                            label="Step"
                            style={{ height: '4px' }}
                            // value={horse.step}
                            // onChange={(e) => doNothing()}
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
                        <Button variant="contained" onClick={() => doNothing()}>Back</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" onClick={() => doNothing()}>Lay</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <FormControlLabel control={<Checkbox />} label="Multibet" />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                {/* Additional actions can be added here */}
            </CardActions>
        </Card>
    );
}
