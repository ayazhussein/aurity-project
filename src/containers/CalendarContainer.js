import React, { Component } from "react";
import Calendar from "../components/Calendar";
import { connect } from "react-redux";


class CalendarContainer extends Component {
    render() {
        // console.log(this.props);
        return (
            <Calendar {...this.props}/>
        )
    }
}

function mapStateToProps(state) {

    const { month, selectedDay, selectedWeek } = state.calendar;
    const { timesheet, selectedUser } = state.users;
    return {
        month,
        selectedDay,
        selectedWeek,
        timesheet,
        selectedUser
    }
}

export default connect(mapStateToProps)(CalendarContainer);