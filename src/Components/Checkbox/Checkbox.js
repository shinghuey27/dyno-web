import Label from "../Label/Label";
import "./Checkbox.css";

const Checkbox = (props) => {
  const {
    container,
    input,
    checkMark,
    label,
    classNameContainer,
    classNameCheckmark
  } = props;

  const defaultLabel = typeof label === "string" ? label : "Default";

  return (
    <Label className={classNameContainer} label={defaultLabel} {...container}>
      <input type="checkbox" {...input} />
      <span className={classNameCheckmark} {...checkMark} />
    </Label>
  );
};

Checkbox.defaultProps = {
  classNameContainer: "container",
  classNameCheckmark: "checkmark"
};

export default Checkbox;
