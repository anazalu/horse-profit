import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import { Grid, Stack } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface MultiBet {
    raceId: number;
    stake: number;
    betType: string;
    horseIds: number[]
}

interface MultiStakeContainerProps {
    raceId: string;
    multiBetSet: Set<number>;
}

function MultiStakeContainer({ raceId, multiBetSet }: MultiStakeContainerProps) {
    const queryClient = useQueryClient();

    const [multiStake, setMultiStake] = useState<number>(0)

    const multiBetMutation = useMutation((multiBet: MultiBet) => {
        return axios.post(`http://localhost:5000/api/horses/multibet`, multiBet)
            .then((response) => {
                console.log(response)
                queryClient.invalidateQueries(['horses' + multiBet.raceId])
            })
    });


    const multiBack = () => {
        multiBetMutation.mutate({ raceId: ~~raceId, stake: multiStake, betType: "back", horseIds: Array.from(multiBetSet) });
        console.log(`a stake of ${multiStake} is divided between horses: ${Array.from(multiBetSet)} in a Back bet`);
    }

    const multiLay = () => {
        multiBetMutation.mutate({ raceId: ~~raceId, stake: multiStake, betType: "lay", horseIds: Array.from(multiBetSet) });
        console.log(`a stake of ${multiStake} is divided between horses: ${Array.from(multiBetSet)} in a Lay bet`);
    }

    return (
        <Grid container spacing={2} md={8}>
            <Stack direction="row" spacing={2}>
                <TextField
                    id="outlined-basic" label="MultiStake" variant="outlined"
                    value={multiStake}
                    defaultValue={''}
                    onChange={(e) => setMultiStake(~~e.target.value)}
                />
                <Button variant="contained" onClick={multiBack}>Multi Back</Button>
                <Button variant="contained" onClick={multiLay}>Multi Lay</Button>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Button variant="contained">Cashout</Button>
                <Button variant="contained">Top 3</Button>
            </Stack>
        </Grid>
    )
}

function setHorses(updatedHorses: any) {
    throw new Error("Function not implemented.");
}

export default MultiStakeContainer;
