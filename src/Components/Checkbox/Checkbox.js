import React from 'react';
import Label from "../Label/Label";
import "./Checkbox.css";
import PropTypes from "prop-types";

const Checkbox = (props) => {
  const {
    container,
    input,
    checkMark,
    label,
    field,
    classNameContainer,
    classNameCheckmark
  } = props;
  
  const defaultLabel = typeof label === "string" ? label : "Default";

  return (
    <Label className={classNameContainer} label={defaultLabel} {...container}>
      <input type="checkbox" {...field} />
      <span className={classNameCheckmark} {...checkMark} />
    </Label>
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
