import React from 'react';
import Label from "../Label/Label";
import "./Switch.css";
import PropTypes from "prop-types";
import ErrorMessage from '../Label/ErrorMessage';

const Switch = (props) => {

  const {
    containerStyle,
    labelStyle,
    errorStyle,
    item,
    field,
    sliderStyle
  } = props;

  const { label } = item || { label: "" };
  const defaultLabel = typeof label === "string" ? label : "Default";

  return (
    <>
      <div className="flex">

        {label && <Label label={defaultLabel} {...labelStyle} />}

        <Label className={'switch'} label="" {...containerStyle}>
          <input type="checkbox" {...field} />
          <span className={'slider round'} {...sliderStyle}></span>
        </Label>


      </div>
      <ErrorMessage
        {...errorStyle}
        {...props} />

    </>
  );
};

export default Switch;
