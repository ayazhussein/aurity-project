import React, { Component } from 'react';
import Button from "../components/Button";
import { connect } from "react-redux";


class CTAContainer extends Component {

    constructor(props) {
        super(props);
        this.approveWeek = this.approveWeek.bind(this);
    }

    approveWeek() {
        console.log("I APPROVE!")
    }

    render() {
        const { selected, selectedUser } = this.props;
        return (
            <div className="cta-container">
                <Button
                    className={"btn btn-approve"}
                    title={"Approve"}
                    onClick={this.approveWeek}
                    disabled={!selected && !selectedUser}
                />
                <Button
                    className={"btn btn-reject"}
                    title={"Reject"}
                    onClick={this.approveWeek}
                    disabled={!selected && !selectedUser}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedUser, loggedIn } = state.users;
    const { selected } = state.calendar;
    return {
        selectedUser,
        loggedIn,
        selected,
    }
}
export default connect(mapStateToProps)(CTAContainer);