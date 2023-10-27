import { Card, CardContent, CardActions, Checkbox, Typography, Button, Grid, TextField, FormControlLabel } from '@mui/material';

interface Horse {
    horseId: number;
    ratio: number;
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
                        <Typography variant="body2">{horse.ratio}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <TextField
                            type="text"
                            label="Stake"
                            style={{ height: '5px' }}
                            value={horse.stake} />
                    </Grid>
                    <Grid item xs={0.8}>
                        <TextField
                            // id="outlined"
                            // id="standard-number"
                            type="number"
                            label="Step"
                            style={{ height: '5px' }}
                            // value={horse.step}
                            // onChange={(e) => doNothing()}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard" />
                    </Grid>
                    <Grid item xs={1}>
                        <TextField
                            type="text"
                            label="Profit"
                            style={{ height: '5px' }}
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
                        {/* <Checkbox
                checked={horse.isMultiBet}
                // onChange={() => doNothing()}
            /> */}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                {/* Additional actions can be added here */}
            </CardActions>
        </Card>
    );
}
