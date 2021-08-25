import React, { FC } from 'react'
import { ToolNavigation } from './tool-nav/ToolNavigation';
import { toolboxStyles } from './Toolbox.styles';

export const Toolbox: FC = () => {
    const classes = toolboxStyles();
    return (
        <div className={classes.toolbox} data-testid="toolbox">
           <ToolNavigation />
        </div>
    )
}