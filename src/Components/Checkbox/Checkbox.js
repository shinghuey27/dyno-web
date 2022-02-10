import Label from "../Label/Label";
import "./Checkbox.css";
import PropTypes from "prop-types";

const Checkbox = (props) => {
  const {
    container,
    input,
    checkMark,
    label,
    classNameContainer,
    classNameCheckmark
  } = props;

  return (
    <Label className={classNameContainer} label={label} {...container}>
      <input type="checkbox" {...input} />
      <span className={classNameCheckmark} {...checkMark} />
    </Label>
  );
};

Checkbox.defaultProps = {
  label: 'Default',
  classNameContainer: "container",
  classNameCheckmark: "checkmark"
};


Checkbox.propTypes = {
  label: PropTypes.string,

};

export default Checkbox;
