import { SET_USER, DELETE_USER } from './userTypes';

const INITIAL_STATE = {
    name: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, name: action.payload };
        case DELETE_USER:
            return { ...state, name: '' };
        default:
            return state;
    }
};

export default userReducer;
