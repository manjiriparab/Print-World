import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BallotIcon from '@material-ui/icons/Ballot';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { MenuList} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Layout(props) {
    const classes = useStyles();
    const location = useLocation();
    let selectmenu = location.pathname;

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <MenuList>
                    <MenuItem component={Link} to="/home" selected={selectmenu === '/home'}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </MenuItem>
                </MenuList>
                <MenuList>
                    <MenuItem component={Link} to="/order_history" selected={selectmenu === '/order_history'}>
                        <ListItemIcon>
                            <BallotIcon />
                        </ListItemIcon>
                        <ListItemText primary="Order History" />
                    </MenuItem>
                </MenuList>
                <MenuList>
                    <MenuItem component={Link} to="/place_order" selected={selectmenu === '/place_order'}>
                        <ListItemIcon>
                            <BorderColorIcon />
                        </ListItemIcon>
                        <ListItemText primary="Place Order" />
                    </MenuItem>
                </MenuList>
            </List>
        </div>
    );
}
