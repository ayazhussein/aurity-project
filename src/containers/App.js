import React, { Component } from "react";
import UsersContainer from "./UsersContainer";
import CalendarContainer from "./CalendarContainer";
import CTAContainer from "./CTAContainer";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <UsersContainer />
                <CalendarContainer />
                <CTAContainer />
            </div>
        )
    }
}



export default App;
