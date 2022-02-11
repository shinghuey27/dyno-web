import React from 'react';
import Label from "../Label/Label";
import "./Switch.css";
import PropTypes from "prop-types";

const Switch = (props) => {

  const {
    container,
    label,
    labelProps,
    slider,
    classNameLabel,
    classNameSlider } = props;

    const defaultLabel = typeof label === "string" ? label : "Default";

  return (
    <div className="flex">

      {label && <Label label={defaultLabel} {...labelProps} />}

      <Label className={classNameLabel} label="" {...container}>
        <input type="checkbox" />
        <span className={classNameSlider} {...slider}></span>
      </Label>

    </div>
  );
};

Switch.defaultProps = {
  classNameLabel: "switch",
  classNameSlider: "slider round"
};

Switch.propTypes = {
  label: PropTypes.string,

};

export default Switch;
