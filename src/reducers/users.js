import * as types from "../constants/ActionTypes";
const initialState = {
    users: [],
    loading: false,
    error: null,
    loggedUser: "",
    selectedUser: "",
    timesheet: {},
};

export default function Users(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_USERS:
            return Object.assign({}, state, { loading: true });
        case types.FETCH_USERS_SUCCESS:
            return Object.assign({}, state, { users: action.payload.users, loading: false });
        case types.FETCH_USERS_FAIL:
            return Object.assign({}, state, { error: action.payload.error, loading: false });
        case types.SELECT_LOGGED_IN_USER:
            return Object.assign({}, state, { loggedUser: action.payload });
        case types.SELECT_USER_TO_APPROVE:
            return Object.assign({}, state, { selectedUser: action.payload });
        case types.FETCH_USER_TIMESHEET:
            return Object.assign({}, state, { loading: true});
        case types.FETCH_USER_TIMESHEET_SUCCESS: {
            return Object.assign({}, state, { loading: false, timesheet: action.payload} );
        }
        case types.FETCH_USER_TIMESHEET_FAIL: {
            return Object.assign({}, state, { loading: false, error: action.payload});
        }
        default:
            return state;
    }
}