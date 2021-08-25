import { Grid } from '@material-ui/core';
import React, { FC } from 'react'
import { stageStyles } from './Stage.styles';

export const Stage: FC = () => {
    const classes = stageStyles();
    return (
        <Grid className={classes.stage} data-testid="stage" container spacing={3} justifyContent="center" direction="column">
            <Grid item xs={12} className={classes.avatarContainer}>
               <canvas className={classes.canvas} />
            </Grid>
        </Grid>
    )
}