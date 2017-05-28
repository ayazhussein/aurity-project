import React, { Component } from "react";


class UserSelect extends Component {
    renderSelect() {
        const {users} = this.props;
        return users.map(user => (
            <option key={user.id} value={user.id}>
                {user.username}
            </option>
        ))
    }

    render() {
        const { label, select, id, selected } = this.props;
        return (
            <div className="select">
                <label htmlFor={id}>{label}</label>
                <select value={selected} onChange={(e) => {
                    console.log(e.target.value);
                    select(e.target.value)
                }} id={id}>
                    <option value="">Select a user</option>
                    {this.renderSelect()}
                </select>
            </div>
        );
    }
}

export default UserSelect;