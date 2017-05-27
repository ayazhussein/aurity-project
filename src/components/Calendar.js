import React, { Component } from "react";
import { selectDay, nextMonth, previousMonth } from "../actions/calendarActions";
import moment from "moment";
import getWeeks from "../utils/calendar";

export default class Calendar extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     month: new Date(),
        //     selectedDay: new Date(),
        // };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        // console.log(this.getWeeks(this.state.month));
    }

    previous() {
        const {dispatch, month} = this.props;
        dispatch(previousMonth(month));
        // const { month } = this.state;
        // if (month.getMonth() === 0) {
        //     this.setState({
        //         month: new Date(month.getFullYear() - 1, 11),
        //     })
        // } else {
        //     this.setState({
        //         month: new Date(month.getFullYear(), month.getMonth() - 1),
        //     });
        // }
    }

    next() {
        const {dispatch, month} = this.props;
        dispatch(nextMonth(month));
        // const { month } = this.state;
        // if (month.getMonth() === 11) {
        //     this.setState({
        //         month: new Date(month.getFullYear() + 1, 0),
        //     })
        // } else {
        //     this.setState({
        //         month: new Date(month.getFullYear(), month.getMonth() + 1),
        //     });
        // }
    }

    select(day) {
        const { dispatch } = this.props;
        dispatch(selectDay(day));
        // this.setState({
        //     selectedDay: day.date,
        //     month: day.date,
        // })
    }



    renderWeeks() {
        const {
            selectedDay,
            month,
        } = this.props;
        let weeks = getWeeks(month);
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

class DayNames extends Component {
    render() {
        return (
            <div className="row day-names">
                <span className="day">Sun</span>
                <span className="day">Mon</span>
                <span className="day">Tue</span>
                <span className="day">Wed</span>
                <span className="day">Thu</span>
                <span className="day">Fri</span>
                <span className="day">Sat</span>
            </div>
        );
    }
}

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
                name: moment(week[i]).format("dd").substring(0, 1),
                number: week[i].getDate(),
                isCurrentMonth: week[i].getMonth() === month.getMonth(),
                isToday: moment(week[i]).isSame(new Date(), "day"),
                date: week[i],
            };
            days.push(
                <Day day={day}
                     selected={selected}
                     select={select}
                     key={day.date}/>
            );

            week[i] = new Date(week[i]);
        }

        return (
            <div className="row week" key={days[0]}>
                {days}
            </div>
        );
    }

}

class Day extends Component {
    render() {
        const {
            day,
            day: {
                date,
                isCurrentMonth,
                isToday,
                number
            },
            select,
            selected
        } = this.props;

        return (
            <span
                key={date.toString()}
                className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (moment(date).isSame(selected) ? " selected" : "")}
                onClick={() => select(day)}>{number}</span>
        );
    }
}