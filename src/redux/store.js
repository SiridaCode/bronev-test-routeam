import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/userReducer';
import tableDataReducer from './tableData/tableDataReducer';

// const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
// const devtoolMiddleware = ext && ext();

const reducers = combineReducers({
    user: userReducer,
    table: tableDataReducer,
});

const store = createStore(
    reducers,
    // compose(applyMiddleware(thunk), devtoolMiddleware)
    compose(applyMiddleware(thunk))
);

export default store;
