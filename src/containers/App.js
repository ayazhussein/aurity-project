import React, { Component } from "react";
import User from "../components/User";
import CalendarContainer from "./CalendarContainer";

class App extends Component {
    render() {
        return (
            <div>
                <User />
                <CalendarContainer />
            </div>
        )
    }
}



export default App;
