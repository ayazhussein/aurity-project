import { combineReducers } from 'redux';
import calendar from "./calendar";

const rootReducer = combineReducers({
    user: function (state = {}, action) {
        return state;
    },
    calendar
});

export default rootReducer;
