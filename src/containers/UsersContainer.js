import React, { Component } from "react";
import { connect } from "react-redux";
import UserSelect from "../components/UserSelect";
import { getUsersList, loginAs, selectUserToApprove, fetchMonthByUserId } from "../actions/usersActions";

class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.loginAs = this.loginAs.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getUsersList());
    }

    loginAs(user) {
        const { dispatch } = this.props;
        dispatch(loginAs(user));
    }

    selectUserToApprove(user) {
        const {dispatch} = this.props;
        dispatch(selectUserToApprove(user));
        dispatch(fetchMonthByUserId(user));
    }

    render() {
        const { users, selectedUser, loggedUser } = this.props;
        return (
            <div className="users">
                <UserSelect
                    id="loginAs"
                    label="Login as"
                    users={users}
                    selected={loggedUser}
                    select={(user) => this.loginAs(user)}
                />
                <br/>
                <UserSelect
                    id="userToApprove"
                    label="Approve: "
                    users={users}
                    selected={selectedUser}
                    select={(user) => this.selectUserToApprove(user) }
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { users, selectedUser, loggedUser, loading, error } = state.users;

    return {
        users,
        loading,
        selectedUser,
        loggedUser,
        error
    }
}


export default connect(mapStateToProps)(UsersContainer);