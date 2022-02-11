import React from 'react';
import "./Label.css";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {

  const {
    label
  } = props;

  return <div {...props}>{label}</div>;

};

ErrorMessage.defaultProps = {
  label: "default error",
  className: "errorMessage"
};

ErrorMessage.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string
};

export default ErrorMessage;
