import './App.css';
import Grid from '@mui/material/Grid';
import MultiStakeContainer from './components/MultiStakeContainer';
import HorsesContainer from './components/HorsesContainer';

function App() {


  return (
      <Grid container spacing={3} margin={5}>
        <Grid item xs={6}>
          <div className="left-pane">
            <HorsesContainer />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="right-pane">
            <MultiStakeContainer /> 
          </div>
        </Grid>
      </Grid>
  );
}

export default App;
