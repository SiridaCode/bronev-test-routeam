import fetchData from '../../api/axios';

import { SET_USER, DELETE_USER } from './userTypes';

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload,
    };
};

export const deleteUser = () => ({ type: DELETE_USER });

export const fetchUser = () => async (dispatch) => {
    const data = await fetchData(
        process.env.REACT_APP_URL_CORE,
        process.env.REACT_APP_PATH_CURRENT
    );
    dispatch(setUser(data.username));
};
