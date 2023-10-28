import './App.css';
import Grid from '@mui/material/Grid';
import MultiStakeContainer from './components/MultiStakeContainer';
import HorsesContainer from './components/HorsesContainer';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import React from 'react';

function App() {

    const [race, chooseRace] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      chooseRace(event.target.value as string);
    };

    return (

      <Grid container spacing={3} margin={5}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Race</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={race}
              label="Race"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid item xs={6}>
          <div className="left-pane">
            <HorsesContainer />
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
