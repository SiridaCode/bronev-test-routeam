import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/user/userActions';
import './styles.css';

const Authorization = () => {
    const [timerId, setTimerId] = useState(null);
    const dispatch = useDispatch();

    const onClickBtn = () => {
        const authWindow = window.open(
            'https://core.t2.routeam.ru/auth/sso',
            'auth',
            'width=500, height=500'
        );

        const interval = setInterval(() => {
            try {
                const url = new URL(authWindow.document.location.href);
                const token = url.searchParams.get('token');

                if (token) {
                    localStorage.setItem('token', token);
                    dispatch(fetchUser());
                    authWindow.close();
                    window.history.pushState(null, null, '/drivers');
                }
            } catch (error) {}
        }, 100);
        setTimerId(interval);
    };

    useEffect(() => {
        return () => clearInterval(timerId);
    }, [timerId]);

    return (
        <Box fullwidth sx={{ display: 'flex' }}>
            <Box className="authorization-image" />
            <Box className="authorization">
                <Box className="authorization-text">
                    <Typography variant="h1" component="h1">
                        Добро пожаловать в систему управления продажами
                        <br></br>
                        <Typography variant="strong" component="strong">
                            БРОНЕВ
                        </Typography>
                    </Typography>
                    <Typography variant="span" component="span">
                        Для продолжения работы необходимо пройти авторизацию
                    </Typography>

                    <Divider />
                    <Button
                        onClick={onClickBtn}
                        sx={{ width: 250, my: 1 }}
                        target="_blank"
                        variant="outlined"
                        size="large"
                    >
                        Войти
                    </Button>
                    <Divider />
                </Box>
            </Box>
        </Box>
    );
};

export default Authorization;
