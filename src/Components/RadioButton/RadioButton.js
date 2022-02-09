import Label from "../Label/Label";
import styles from "./RadioButton.module.scss";
import PropTypes from "prop-types";

const RadioButton = (props) => {
  
  const { container, input, checkMark, label } = props;
  
  return (
    <Label className={props.classNameLabel}
      label={typeof label === 'string' ? label : 'Default'}
      {...container}>
      <input type="radio" name="radio" {...input} />
      <span className={props.classNameCheckMark} {...checkMark}></span>
    </Label>

  );
};

RadioButton.defaultProps = {
  classNameLabel: styles.container,
  classNameCheckMark: styles.checkmark,  
}

RadioButton.propTypes = {
  label: PropTypes.string.isRequired
};


export default RadioButton;
