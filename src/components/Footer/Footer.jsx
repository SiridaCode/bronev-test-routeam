import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Footer = () => (
    <Box sx={{ marginTop: 'auto' }}>
        <AppBar sx={{ background: 'white' }} position="static">
            <Toolbar>
                <Typography
                    variant="span"
                    component="span"
                    sx={{
                        color: '#67757c',
                        marginLeft: '60px',
                        flexGrow: 1,
                    }}
                >
                    © 2019 Bronew
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
);

export default Footer;
