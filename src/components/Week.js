import React, { Component } from "react";
import moment from "moment";
import Day from "./Day";

class Week extends Component {
    render() {
        let days = [];
        let {
            week,
        } = this.props;
        const {
            month,
            selected,
            select,
        } = this.props;

        for (let i = 0; i < 7; i++) {
            let day = {
                name: moment(week.week[i]).format("dd").substring(0, 1),
                number: week.week[i].getDate(),
                hoursWorked: week.days_in_week && week.days_in_week[i] && week.days_in_week[i].hours,
                minutesWorked: week.days_in_week && week.days_in_week[i] && week.days_in_week[i].minutes,
                status: week.status,
                isCurrentMonth: week.week[i].getMonth() === month.getMonth(),
                isToday: moment(week.week[i]).isSame(new Date(), "day"),
                date: week.week[i],
                ...week,
            };
            days.push(
                <Day day={day}
                     selected={selected}
                     select={select}
                     key={day.date}/>
            );

            week.week[i] = new Date(week.week[i]);
        }

        return (
            <div className={`row week ${week.status === "approved" ? "approved" : ""}
                ${week.status === "rejected" ? "rejected" : ""}
                ${week.status === "pending" ? "pending" : ""}
            `} key={days[0]}>
                {days}
            </div>
        );
    }

}

export default Week;