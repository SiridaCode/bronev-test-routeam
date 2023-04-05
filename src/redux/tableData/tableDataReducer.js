import {
    SET_DRIVERS,
    SET_DIRECTIONS,
    SET_PEOPLE,
    INITIAL_STATE,
} from './columnsTypes';

const tableDataReducer = (table = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DRIVERS:
            return { ...table, drivers: table.drivers };
        case SET_DIRECTIONS:
            return { ...table, directions: table.directions };
        case SET_PEOPLE:
            return { ...table, people: table.people };
        default:
            return table;
    }
};

export default tableDataReducer;
