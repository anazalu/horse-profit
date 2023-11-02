import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import { Grid, Stack } from '@mui/material';
import { useState } from 'react';

// export interface MultiStakeProps {
//     onMulti: (order: OrderDTO) => void;
// }

function MultiStakeContainer() {
    const [stake, setMultiStake] = useState<number>(0)

    // const onSubmit = (e: any) => {
    //     e.preventDefault()

    //     if (!multiValue) {
    //         alert('Please add a task')
    //         return
    //     }

    const multiBack = () => {
        console.log('multiBack');
    }

    const multiLay = () => {
        console.log('multiLay');
    }

    return (
        <Grid container spacing={2} md={8} 
        // onSubmit={onSubmit}
        >
            <Stack direction="row" spacing={2}>
                <TextField
                    id="outlined-basic" label="MultiStake" variant="outlined" 
                    // value={multiValue} 
                    defaultValue={''}
                    // onChange={(e) => setMultiStake(e.target.value)}
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
