import React from 'react';
import Label from "../Label/Label";
import "./Checkbox.css";
import PropTypes from "prop-types";
import ErrorMessage from '../Label/ErrorMessage';

const Checkbox = (props) => {
  const {
    name,
    containerStyle,
    checkMarkStyle,
    errorStyle,
    item,
    field,    
  } = props;

  const { label } = item || { label: "" };
  const defaultLabel = typeof label === "string" ? label : "Default";

  return (
    <>
      <Label
        label={defaultLabel}
        className={'container'}
        {...containerStyle}

      >
        <input type="checkbox" name={name} {...field} />
        <span className={'checkmark'} {...checkMarkStyle} />
      </Label>
      <ErrorMessage
        {...errorStyle}
        {...props} />
    </>
  );
};

export default Checkbox;
