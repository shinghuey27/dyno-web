import React from 'react';
import "./Label.css";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {

  const { name, item, error } = props;

  const errorMsg = error && error[name] && error[name].message || ""

  return <div {...props}>{errorMsg}</div>;

};

ErrorMessage.defaultProps = {  
  className: "errorMessage"
};

ErrorMessage.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string
};

export default ErrorMessage;
