import React, { Component } from 'react';
import Button from "../components/Button";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import notify from "../utils/notify";
import { approveOrRejectWeek } from "../actions/usersActions";



class CTAContainer extends Component {

    constructor(props) {
        super(props);
        this.approveWeek = this.approveWeek.bind(this);
        this.rejectWeek = this.rejectWeek.bind(this);
    }



    rejectWeek() {
        const { dispatch, selectedUser, selected, loggedUser } = this.props;
        if (loggedUser !== "" && selected.approvers && selected.approvers.length > 0 && selected.approvers.indexOf(parseInt(loggedUser)) === -1) {
            notify("<h3>You are not allowed to approve nor reject!</h3>", "info").show();
        } else {
            const status = "rejected";
            dispatch(approveOrRejectWeek(selected.week_id, selectedUser, status));
            notify("<h3>Week Rejected!</h3>", "success").show();
        }
    }

    approveWeek(e) {
        const { dispatch, selectedUser, selected, allowApprove } = this.props;
        if (allowApprove) {
            notify("<h3>You are not allowed to approve nor reject!</h3>", "info").show();
        } else {
            const status = "approved";
            dispatch(approveOrRejectWeek(selected.week_id, selectedUser, status));
            notify("<h3>Week Approved!</h3>", "success").show();
        }
    }

    render() {
        const { selected, selectedUser } = this.props;
        return (
            <div className="cta-container">
                <Button
                    className={"btn btn-approve"}
                    title={"Approve"}
                    onClick={this.approveWeek}
                    disabled={selected === null || selectedUser === ""}
                />
                <Button
                    className={"btn btn-reject"}
                    title={"Reject"}
                    onClick={this.rejectWeek}
                    disabled={selected === null || selectedUser === ""}
                />
            </div>
        )
    }
}

function isAllowed(Comp) {
    return (props) => (
        <Comp {...props}/>
    )
}

function verifyIfAllowed({selectedUser, selected, loggedUser}) {
    return {
        allowed : selectedUser !== "" && selected !== null,
        allowApprove: loggedUser !== "" && selected.approvers && selected.approvers.length > 0 && selected.approvers.indexOf(parseInt(loggedUser)) === -1,
    }

}


function mapStateToProps(state) {
    const { selectedUser, loggedUser } = state.users;
    const { selected } = state.calendar;

    return {
        selectedUser,
        selected,
        ...verifyIfAllowed({selectedUser, selected, loggedUser}),
    }
}
export default connect(mapStateToProps)(CTAContainer);