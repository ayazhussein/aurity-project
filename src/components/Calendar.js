import React, { Component } from "react";
import { selectDay, nextMonth, previousMonth } from "../actions/calendarActions";
import moment from "moment";
import getWeeks from "../utils/calendar";
import { fetchMonthByUserId } from "../actions/usersActions";
import DayNames from "./DayNames";
import Week from "./Week";

export default class Calendar extends Component {

    constructor(props) {
        super(props);

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous() {
        const { dispatch, month, selectedUser } = this.props;
        dispatch(previousMonth(month));
        if (selectedUser !== "") {
            dispatch(fetchMonthByUserId(selectedUser))
        }
    }

    next() {
        const { dispatch, month, selectedUser } = this.props;
        dispatch(nextMonth(month));
        if (selectedUser !== "") {
            dispatch(fetchMonthByUserId(selectedUser))
        }
    }

    select(day) {
        const { dispatch } = this.props;
        dispatch(selectDay(day));
    }


    renderWeeks() {
        const {
            selectedDay,
            month,
            timesheet
        } = this.props;
        let workWeek;
        let weeks = getWeeks(month);
        if (timesheet && timesheet.weeks) {
            workWeek = timesheet.weeks.sort(function (a, b) {
                return a.week_number - b.week_number
            });
            // console.log(workWeek);
        }

        if (workWeek && weeks) {
            for (let i = 0; i < weeks.length; i++) {
                for (let j = 0; j < workWeek.length; j++) {
                    if (weeks[i].weekNumber === workWeek[j].week_number) {
                        weeks[i] = Object.assign({}, weeks[i], workWeek[j]);
                    }
                }
            }
        }
        // console.log(weeks);
        return weeks.map((week, i) => {
            return (<Week key={i}
                          week={week}
                          month={month}
                          select={(day) => this.select(day)}
                          selected={selectedDay}/>
            );
        });
    };

    renderMonthLabel() {
        const {
            month,
        } = this.props;

        return <span className="month-label">{moment(month).format("MMMM YYYY")}</span>;
    }

    render() {
        // console.log(this.state);
        return (
            <section className="calendar">
                <header className="header">
                    <div className="month-display row">
                        <i className="arrow fa fa-angle-left" onClick={this.previous}/>
                        {this.renderMonthLabel()}
                        <i className="arrow fa fa-angle-right" onClick={this.next}/>
                    </div>
                    <DayNames />
                </header>
                {this.renderWeeks()}
            </section>
        );
    }
}




