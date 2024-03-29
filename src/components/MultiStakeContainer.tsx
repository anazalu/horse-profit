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
        return axios.post(`http://localhost:8080/api/horses/multibet`, multiBet)
            .then((response) => {
                console.log(response)
                queryClient.invalidateQueries(['horses' + multiBet.raceId])
            })
    });


    const multiBack = () => {
        multiBetMutation.mutate({ raceId: ~~raceId, stake: multiStake || 0, betType: "back", horseIds: Array.from(multiBetSet) });
        console.log(`a stake of ${multiStake} is divided between horses: ${Array.from(multiBetSet)} in a Back bet`);
        setMultiStake(0);
    }

    const multiLay = () => {
        multiBetMutation.mutate({ raceId: ~~raceId, stake: multiStake || 0, betType: "lay", horseIds: Array.from(multiBetSet) });
        console.log(`a stake of ${multiStake} is divided between horses: ${Array.from(multiBetSet)} in a Lay bet`);
        setMultiStake(0);
    }

    return (

        <Box sx={{ width: 500 }}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                <TextField
                    id="outlined-basic" label="MultiStake" variant="outlined" size="small"
                    value={multiStake}
                    onChange={(e) => setMultiStake(~~e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
                <Button variant="contained" onClick={multiBack}>Multi Back</Button>
                <Button variant="contained" onClick={multiLay}>Multi Lay</Button>
                <Button variant="contained">Cashout</Button>
                <Button variant="contained">Top 3</Button>
            </Stack>
        </Box>
    )
}

// function setHorses(updatedHorses: any) {
//     throw new Error("Function not implemented.");
// }

export default MultiStakeContainer;
