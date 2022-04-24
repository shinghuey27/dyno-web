import React from 'react';
import Label from "../Label/Label";
import styles from "./RadioButton.module.scss";
import PropTypes from "prop-types";
import ErrorMessage from "../Label/ErrorMessage";

const RadioButton = (props) => {
  const {
    name,
    containerStyle,
    checkMarkStyle,
    item,
    field,
    error,

  } = props;
  const { label } = item || { label: "" };

  const defaultLabel = typeof label === "string" ? label : "Default";

  return (
    <>
      <Label className={styles.container} label={defaultLabel} {...containerStyle}>
        <input type="radio" name={name} {...field} />
        <span className={styles.checkmark} {...checkMarkStyle}></span>
      </Label>
      <ErrorMessage {...props} />
    </>
  );
};

export default RadioButton;
