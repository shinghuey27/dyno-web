import React from 'react';
import Label from "../Label/Label";
import styles from "./RadioButton.module.scss";
import PropTypes from "prop-types";
import { renderError } from '../../Utils/isErrorForm';
import ErrorMessage from "../Label/ErrorMessage";

const RadioButton = (props) => {
  const {
    name,
    container,
    checkMark,
    item,
    field,
    error,
    classNameContainer,
    classNameCheckMark
  } = props;
  const { label } = item || { label: "" };

  const defaultLabel = typeof label === "string" ? label : "Default";

  return (
    <>
      <Label className={classNameContainer} label={defaultLabel} {...container}>
        <input type="radio" name={name} {...field} />
        <span className={classNameCheckMark} {...checkMark}></span>
      </Label>
      {renderError(name, error) && <ErrorMessage {...props} />}
    </>
  );
};

RadioButton.defaultProps = {
  classNameContainer: styles.container,
  classNameCheckMark: styles.checkmark
};

RadioButton.propTypes = {
  label: PropTypes.string,
};

export default RadioButton;
