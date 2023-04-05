import React from 'react';

import Accordion from '../SideBar/Accordion/Accordion';
import Dashboard from '../SideBar/Dashboard/Dashboard';
import AppBar from '../SideBar/AppBar/AppBar';
import Footer from '../Footer/Footer';
import logo from '../../assets/images/logo.jpg';
import logoLightText from '../../assets/images/logo-light-text.png';
import logoLightIcon from '../../assets/images/logo-light-icon.png';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
    Box,
    List,
    CssBaseline,
    Divider,
    IconButton,
    Avatar,
    Typography,
} from '@mui/material';

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

const Layout = ({ children }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                padding: '0px',
            }}
        >
            <CssBaseline />
            <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />

            <Drawer variant="permanent" open={open}>
                <DrawerHeader
                    sx={{
                        justifyContent: 'space-around',
                        background: 'black',
                        borderRadius: '0px',
                        width: '100%',
                    }}
                >
                    <IconButton>
                        <Avatar alt="Remy Sharp" src={logoLightIcon} />
                    </IconButton>
                    <Typography
                        sx={{ color: 'white', fontSize: '20px' }}
                        variant="span"
                        component="span"
                    >
                        <img src={logoLightText} alt="logo-light-text" />
                    </Typography>
                    <IconButton
                        sx={{ color: 'white' }}
                        onClick={handleDrawerClose}
                    >
                        {theme.direction === 'rtl' ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Box
                    sx={{
                        background: 'no-repeat url(./user-info.jpg)',
                        borderRadius: '0px',
                        display: 'flex',
                        justifyContent: 'center',
                        p: '12px 12px',
                    }}
                >
                    <Avatar alt="Remy Sharp" src={logo} />
                </Box>
                <Divider />
                <List>{open ? <Accordion /> : <Dashboard />}</List>
            </Drawer>

            <Box
                component="main"
                sx={{ flexGrow: 1, backgroundColor: '#eef5f9' }}
            >
                <Box sx={{ minHeight: 'calc(100vh - 64px)' }}>{children}</Box>
                <Footer />
            </Box>
        </Box>
    );
};

export default Layout;
