import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import {
    IconButton,
    Tooltip,
    Avatar,
    Box,
    ClickAwayListener,
} from '@mui/material';
import { deleteUser } from '../../../redux/user/userActions';

const ClickAway = () => {
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const logout = () => {
        dispatch(deleteUser());
        localStorage.removeItem('token');
        history.push('/login');
    };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        height: '150px',
        position: 'absolute',
        top: 70,
        right: 0,
        left: -200,
        zIndex: 1,
        borderRadius: '10px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        color: 'black',
        p: 0,
        bgcolor: 'background.paper',
        backgroundColor: '#fff',
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box
                sx={{
                    position: 'absolute',
                    right: '30px',
                }}
            >
                <Tooltip title="Open settings">
                    <IconButton onClick={handleClick}>
                        <Avatar alt="Remy Sharp" src={logo} />
                    </IconButton>
                </Tooltip>
                {open ? (
                    <List
                        sx={styles}
                        component="nav"
                        aria-label="mailbox folders"
                    >
                        <ListItem>
                            <ListItemText primary={user?.name} />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="Просмотреть профиль" />
                        </ListItem>
                        <ListItem
                            component={Link}
                            to="/login"
                            onClick={logout}
                            button
                        >
                            <ListItemText primary="Выйти" />
                        </ListItem>
                    </List>
                ) : null}
            </Box>
        </ClickAwayListener>
    );
};

export default ClickAway;
