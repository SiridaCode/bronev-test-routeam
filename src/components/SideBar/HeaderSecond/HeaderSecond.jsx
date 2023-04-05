import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const ButtonAppBar = ({ name }) => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: 'white' }} position="static">
            <Toolbar>
                <Typography
                    variant="span"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        color: 'black',
                        fontSize: '18px',
                    }}
                >
                    {name}
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
);

export default ButtonAppBar;
