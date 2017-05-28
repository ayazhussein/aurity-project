import * as types from "../constants/ActionTypes";
import axios from 'axios';
import * as constants from "../constants/constants";


function fetchUsers() {
    return {
        type: types.FETCH_USERS,
        payload: { loading: true, }
    }
}

function fetchUsersSuccess(users) {
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: {
            users,
            loading: false,
        }
    }
}

function fetchUsersFailed(error) {
    return {
        type: types.FETCH_USERS_FAIL,
        payload: {
            error,
            loading: false,
        }
    }
}

export function getUsersList() {
    return dispatch => {
        dispatch(fetchUsers());
        axios.get(constants.USERS_URL).then(res => {
            console.log(res);
            dispatch(fetchUsersSuccess(res.data));
        }).catch(error => {
            console.log(error);
            dispatch(fetchUsersFailed(error))
        });
    }
}

export function loginAs(user) {
    return {
        type: types.SELECT_LOGGED_IN_USER,
        payload: user,
    }
}

export function selectUserToApprove(user) {
    return {
        type: types.SELECT_USER_TO_APPROVE,
        payload: user,
    }
}

function getTimeSheet() {
    return {
        type: types.FETCH_USER_TIMESHEET
    }
}

function getTimeSheetSuccess(timesheet) {
    return {
        type: types.FETCH_USER_TIMESHEET_SUCCESS,
        payload: timesheet,
    }
}

function getTimeSheetFail(error) {
    return {
        type: types.FETCH_USER_TIMESHEET_FAIL,
        payload: error
    }
}

export function fetchMonthByUserId(userId) {
    return (dispatch, getState) => {
        const state = getState();
        const { calendar: { month } } = state;
        dispatch(getTimeSheet());
        axios.get(constants.generateMonthUrlForUser(month.getMonth() + 1, month.getFullYear(), userId)).then(res => {
            console.log(res);
            dispatch(getTimeSheetSuccess(res.data.data));
        }).catch(error => {
            console.log(error);
            dispatch(getTimeSheetFail(error));
        })
    }
}


