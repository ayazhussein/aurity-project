import React, { Component } from "react";
import { connect } from "react-redux";
import Calendar from "../components/Calendar";
import { initCalendar } from "../actions/calendarActions";
import User from "../components/User";

class App extends Component {
    componentWillMount() {
        this.props.dispatch(initCalendar());
    }

    render() {
        const { calendar, dispatch} = this.props;
        console.log(this.props);
        return (
            <div>
                <User />
                <Calendar {...calendar} dispatch={dispatch} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    const {calendar} = state;
    return {
        calendar
    }
}

export default connect(mapStateToProps)(App);
