import Label from "../Label/Label";
import styles from "./RadioButton.module.scss";

const RadioButton = (props) => {
  const { container, input, checkMark, label } = props;

  return (

    <Label className={props.classNameLabel} label={label} {...container}>
      <input type="radio" name="radio" {...input} />
      <span className={props.classNameCheckMark} {...checkMark}></span>
    </Label>

  );
};

RadioButton.defaultProps = {
  classNameLabel: styles.container,
  classNameCheckMark: styles.checkmark
}

export default RadioButton;
