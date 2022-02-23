import React from 'react';
import "./Label.css";
import PropTypes from "prop-types";
import { renderError } from '../../Utils/isErrorForm';

const ErrorMessage = (props) => {

  const { name, item, error, errorClassName, errorStyle } = props;

  if (error === undefined) return null

  const errorMsg = error && error[name] && error[name].message || "default error"

  return <div className={errorClassName} style={errorStyle} {...props}>{
    renderError(name, error) && errorMsg

  }</div>;

};

ErrorMessage.defaultProps = {
  className: "errorMessage"
};

ErrorMessage.propTypes = {
  className: PropTypes.string
};

export default ErrorMessage;
