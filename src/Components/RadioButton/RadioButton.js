import Label from "../Label/Label";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ label, input, checkMark }) => {
  return (

    <Label className={styles.container} {...label}>
      <input type="radio" name="radio" {...input} />
      <span className={styles.checkmark} {...checkMark}></span>
    </Label>

  );
};

export default RadioButton;
