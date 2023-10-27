import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import { Grid, Stack } from '@mui/material';

function MultiStakeContainer() {

    const multiBack = () => {
        console.log('multiBack');
    }

    const multiLay = () => {
        console.log('multiLay');
    }

    return (        
        <Stack
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '20ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField
                id="outlined-basic" label="MultiStake" variant="outlined" defaultValue={''}               
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            //   setName(event.target.value);
            // }}
            />
            <Button variant="contained" onClick={multiBack}>Multi Back</Button>
            <Button variant="contained" onClick={multiLay}>Multi Lay</Button>
            <Button variant="contained">Cashout</Button>
            <Button variant="contained">Top 3</Button>
        </Stack>
    )
}

function setHorses(updatedHorses: any) {
    throw new Error("Function not implemented.");
}

export default MultiStakeContainer;
