import React, { Component } from "react";
import moment from "moment";


export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            month: moment(),
            selected: moment().startOf('day'),
            selectedWeek: moment().week()
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous() {
        const {
            month,
        } = this.state;

        this.setState({
            month: month.subtract(1, 'month'),
        });
    }

    next() {
        const {
            month,
        } = this.state;

        this.setState({
            month: month.add(1, 'month'),
        });
    }

    select(day) {
        console.log(day);
        this.setState({
            selected: day.date,
            month: day.date.clone(),
            selectedWeek: moment(day.date).week()
        });
    }

    renderWeeks() {
        let weeks = [];
        let done = false;
        let date = this.state.month.clone().startOf("month").add("w").day("Sunday");
        let count = 0;
        let monthIndex = date.month();


        const {
            selected,
            month,
        } = this.state;

        while (!done) {
            weeks.push(
                <Week key={date}
                      date={date.clone()}
                      month={month}
                      select={(day) => this.select(day)}
                      selected={selected}/>
            );

            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            console.log(done, count, monthIndex, date.month());
            monthIndex = date.month();
        }

        return weeks;
    };

    renderMonthLabel() {
        const {
            month,
        } = this.state;

        return <span className="month-label">{month.format("MMMM YYYY")}</span>;
    }

    render() {
        console.log(this.state.selectedWeek);
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
            date,
        } = this.props;

        const {
            month,
            selected,
            select,
        } = this.props;

        for (var i = 0; i < 7; i++) {
            let day = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };
            days.push(
                <Day day={day}
                     selected={selected}
                     select={select}
                     key={day.date}/>
            );

            date = date.clone();
            date.add(1, "day");
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
                className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
                onClick={() => select(day)}>{number}</span>
        );
    }
}