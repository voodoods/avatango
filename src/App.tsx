import React, { FC } from 'react';
import './App.styles.ts';
import { Stage } from './stage/Stage';
import { Toolbox } from './toolbox/Toolbox';
import { Grid } from '@material-ui/core';
import { appStyles } from './App.styles';

export const App: FC = () => {
  const classes = appStyles();

  return (
    <div className={classes.root} data-testid="app">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={4}>
          <Stage />
        </Grid>
        <Grid item xs={8}>
          <Toolbox />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
