import Label from "../Label/Label";
import "./Checkbox.css";

const Checkbox = (props) => {

  const { container, input, checkMark, label } = props;

  return (
    <Label
      className={props.classNameContainer}
      label={typeof label === 'string' ? label : 'Default'}
      {...container}
    >
      <input type="checkbox"
        {...input}
      />
      <span
        className={props.classNameCheckmark}
        {...checkMark}></span>
    </Label>
  );
};

Checkbox.defaultProps = {
  classNameContainer: 'container',
  classNameCheckmark: 'checkmark'
}

export default Checkbox;
