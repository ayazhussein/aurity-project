import * as types from "../constants/ActionTypes";
const initialState = {
    month: new Date(),
    selectedDay: null,
    selectedWeek: null,
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
            return Object.assign({}, state, {
                selectedDay: action.selected,
                month: action.selected,
                selectedWeek: action.selectedWeek
            });
        default:
            return state;
    }
}