import { combineReducers } from 'redux';
import calendar from "./calendar";
import users from "./users";

const rootReducer = combineReducers({
    users,
    calendar
});

export default rootReducer;
