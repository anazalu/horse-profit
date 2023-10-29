import './App.css';
import Grid from '@mui/material/Grid';
import MultiStakeContainer from './components/MultiStakeContainer';
import HorsesContainer from './components/HorsesContainer';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React from 'react';

function App() {

  const [raceId, setRaceId] = React.useState('1');

  const handleRaceChange = (event: SelectChangeEvent) => {
    setRaceId(event.target.value as string);
  };

  return (

    <Grid container spacing={3} margin={5}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Race</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={raceId}
            label="Race"
            onChange={handleRaceChange}
          >
            <MenuItem value={1}>Race 1</MenuItem>
            <MenuItem value={2}>Race 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid item xs={6}>
        <div className="left-pane">
          <HorsesContainer raceId={raceId} />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="right-pane">
          <MultiStakeContainer />
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
