import { AppBar, Tab, Tabs } from '@material-ui/core';
import React, { FC } from 'react'
import { toolNavigationStyles } from './ToolNavigation.styles';

export const ToolNavigation: FC = () => {
    const classes = toolNavigationStyles();
    return (
        <AppBar position="static" className={classes.toolNavigation} data-testid="tool-navigation">
            <Tabs value={0}>
                <Tab label="Item One" />
                <Tab label="Item Two"  />
                <Tab label="Item Three" />
            </Tabs>
      </AppBar>
    )
}