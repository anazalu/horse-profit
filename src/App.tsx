import './App.css';
import Grid from '@mui/material/Grid';
import MultiStakeContainer from './components/MultiStakeContainer';
import HorsesContainer from './components/HorsesContainer';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import { useState } from 'react';

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

  const handleClearAll = () => {
    const newSet = new Set<number>();
    setMultiBetSet(newSet);
  }

  return (

    <Grid container spacing={3} margin={5}>


      <Grid item xs={8}>
        <div className="left-pane">
          <Grid
            //  sx={{ minWidth: 120 }}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item>
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
            </Grid>
            <Grid item>
              <Button onClick={handleClearAll}>Clear all</Button>
            </Grid>
          </Grid>

          <HorsesContainer raceId={raceId} multiBetSet={multiBetSet} onCheck={handleMultiBet} />
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
