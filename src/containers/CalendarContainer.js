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
    const { calendar } = state;
    const { month, selectedDay, selectedWeek } = calendar;
    // console.log(month);
    return {
        month,
        selectedDay,
        selectedWeek
    }
}

export default connect(mapStateToProps)(CalendarContainer);