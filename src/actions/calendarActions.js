import * as types from "../constants/ActionTypes";
import moment from "moment";
export function initCalendar() {
    return {
        type: types.INIT_CALENDAR,
        month: moment(),
    }
}

export function nextMonth(month) {
    return {
        type: types.NEXT_MONTH,
        month: month.add(1, "month"),
    }
}

export function previousMonth(month) {
    return {
        type: types.PREVIOUS_MONTH,
        month: month.subtract(1, "month")
    }
}

export function selectedDay(day) {
    return {
        type: types.SELECT_DAY,
        selected: day,
    }
}

export function selectedWeek(week) {
    return {
        type: types.SELECT_WEEK,
        selectedWeek: week
    }
}
export function selectedMonth(date) {
    return {
        type: types.SELECT_MONTH,
        month: date,
    }
}

export function selectDay(day) {
    return dispatch => {
        const week = moment(day.date).week();
        dispatch(selectedWeek(week));
        dispatch(selectedDay(day.date));
        dispatch(selectedMonth(day.date.clone()));
    }
}