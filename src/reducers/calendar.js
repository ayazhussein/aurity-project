import moment from "moment";
import * as types from "../constants/ActionTypes";
const initialState = {
    month: moment(),
    selectedDay: null,
    selectedWeek: null,
    selectedMonth: null,
};

export default function calendar(state = initialState, action) {
    switch (action.type) {
        case types.INIT_CALENDAR:
            return Object.assign({}, state, { month: action.month });
        case types.NEXT_MONTH:
            return Object.assign({}, state, { month: action.month });
        case types.PREVIOUS_MONTH:
            return Object.assign({}, state, { month: action.month });
        case types.SELECT_DAY:
            return Object.assign({}, state, { selectedDay: action.selected });
        case types.SELECT_WEEK:
            return Object.assign({}, state, { selectedWeek: action.selectedWeek });
        case types.SELECT_MONTH:
            return Object.assign({}, state, { month: action.month });
        default:
            return state;
    }
}