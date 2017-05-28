import * as types from "../constants/ActionTypes";
import moment from "moment";
export function initCalendar() {
    return {
        type: types.INIT_CALENDAR,
        month: moment(),
    }
}

export function nextMonth(date) {
    let month;
    if(date.getMonth() === 11) {
         month= new Date(date.getFullYear() + 1, 0);
    } else {
        month = new Date(date.getFullYear(), date.getMonth() + 1);
    }
    return {
        type: types.NEXT_MONTH,
        month,
    }
}

export function previousMonth(date) {
    let month;
    if(date.getMonth() === 0) {
        month= new Date(date.getFullYear() - 1, 11);
    } else {
        month = new Date(date.getFullYear(), date.getMonth() - 1);
    }
    return {
        type: types.PREVIOUS_MONTH,
        month
    }
}

export function selectedDay(day, week) {
    return {
        type: types.SELECT_DAY,
        selected: day,
        selectedDay: day.date,
        selectedWeek: week
    }
}


export function selectDay(day) {
    return dispatch => {
        const week = moment(day.date).week();
        dispatch(selectedDay(day, week));
    }
}

