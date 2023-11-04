import './App.css';
import Grid from '@mui/material/Grid';
import MultiStakeContainer from './components/MultiStakeContainer';
import HorsesContainer from './components/HorsesContainer';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

function App() {
  const [raceId, setRaceId] = useState('1');
  const [multiBetSet, setMultiBetSet] = useState(new Set<number>());

  const handleRaceChange = (event: SelectChangeEvent) => {
    setRaceId(event.target.value as string);
  };

  const handleMultiBet = (horseId: number, isChecked: boolean) => {
    const newSet = new Set<number>(multiBetSet);
    if (isChecked) {
      newSet.add(horseId);
    } else {
      newSet.delete(horseId);
    }
    setMultiBetSet(newSet);
  }

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
          <HorsesContainer raceId={raceId} onCheck={handleMultiBet} />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="right-pane">
          <MultiStakeContainer raceId={raceId} multiBetSet={multiBetSet} />
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
