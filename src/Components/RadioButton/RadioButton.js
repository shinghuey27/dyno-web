import Label from "../Label/Label";
import styles from "./RadioButton.module.scss";
import PropTypes from "prop-types";

const RadioButton = (props) => {
  const {
    container,
    input,
    checkMark,
    label,
    classNameLabel,
    classNameCheckMark
  } = props;

  const defaultLabel = typeof label === "string" ? label : "Default";
  
  return (
    <Label className={classNameLabel} label={defaultLabel} {...container}>
      <input type="radio" name="radio" {...input} />
      <span className={classNameCheckMark} {...checkMark}></span>
    </Label>
  );
};

RadioButton.defaultProps = {
  classNameLabel: styles.container,
  classNameCheckMark: styles.checkmark
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired
};

export default RadioButton;
