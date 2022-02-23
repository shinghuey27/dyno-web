import React from 'react';
import Label from "../Label/Label";
import "./Checkbox.css";
import PropTypes from "prop-types";
import ErrorMessage from '../Label/ErrorMessage';
import { renderError } from '../../Utils/isErrorForm';

const Checkbox = (props) => {
  const {
    name,
    container,
    checkMark,
    item,
    field,
    error,
    classNameContainer,
    classNameCheckmark
  } = props;

  const { label } = item || { label: "" };
  const defaultLabel = typeof label === "string" ? label : "Default";

  return (
    <>
      <Label className={classNameContainer} label={defaultLabel} {...container}>
        <input type="checkbox" name={name} {...field} />
        <span className={classNameCheckmark} {...checkMark} />
      </Label>
      {renderError(name, error) && <ErrorMessage {...props} />}
    </>
  );
};

Checkbox.defaultProps = {
  classNameContainer: "container",
  classNameCheckmark: "checkmark"
};


Checkbox.propTypes = {
  label: PropTypes.string,

};

export default Checkbox;
