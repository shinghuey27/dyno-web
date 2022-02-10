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

  return (
    <div className="flex">

      {label && <Label label={label} {...labelProps} />}

      <Label className={classNameLabel} label="" {...container}>
        <input type="checkbox" />
        <span className={classNameSlider} {...slider}></span>
      </Label>

    </div>
  );
};

Switch.defaultProps = {
  label: 'Default',
  classNameLabel: "switch",
  classNameSlider: "slider round"
};

Switch.propTypes = {
  label: PropTypes.string,

};

export default Switch;
