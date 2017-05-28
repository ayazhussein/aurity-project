import React, { Component } from 'react';
import moment from "moment";

class Day extends Component {
    render() {
        const {
            day,
            day: {
                date,
                isCurrentMonth,
                isToday,
                number,
                hoursWorked,
            },
            select,
            selected
        } = this.props;
        return (
            <div
                key={date.toString()}
                className={`day ${isToday ? "today" : ""}
                ${isCurrentMonth ? "" : "different-month"}
                ${moment(date).isSame(selected) ? "selected" : ""}
                `}
                onClick={() => select(day)}
            >
                <span>{number}</span>
                {hoursWorked > 0 && <span className="worked">{hoursWorked} H</span>}
            </div>
        );
    }
}

export default Day;