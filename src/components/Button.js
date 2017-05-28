import React from "react";
import { PropTypes } from "prop-types";
const Button = ({onClick, title, className, disabled}) => {
    return (
        <button className={className} type="button" disabled={disabled} onClick={onClick}>{title}</button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    title: "Button",
    className: "btn btn-default",
};

export default Button;