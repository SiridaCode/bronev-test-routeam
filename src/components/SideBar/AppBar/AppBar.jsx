import React from 'react';

import { BrowserRouter, Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { Toolbar, IconButton, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const AppBar = ({ handleDrawerOpen, open }) => {
    const drawerWidth = 240;

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar sx={{ backgroundColor: 'black' }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <BrowserRouter>
                    <Button
                        component={Link}
                        to="/sale"
                        size="large"
                        color="inherit"
                    >
                        Продажи
                    </Button>
                    <Button
                        component={Link}
                        to="/routes"
                        size="large"
                        color="inherit"
                    >
                        Маршруты
                    </Button>
                    <Button
                        component={Link}
                        to="/reports"
                        size="large"
                        color="inherit"
                    >
                        Отчеты
                    </Button>
                </BrowserRouter>
                <Dropdown />
            </Toolbar>
        </AppBar>
    );
};

export default AppBar;
