function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Label from "../Label/Label";
import "./Switch.css";
import PropTypes from "prop-types";

const Switch = props => {
  const {
    container,
    label,
    labelProps,
    slider,
    classNameLabel,
    classNameSlider
  } = props;
  const defaultLabel = typeof label === "string" ? label : "Default";
  return /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, label && /*#__PURE__*/React.createElement(Label, _extends({
    label: defaultLabel
  }, labelProps)), /*#__PURE__*/React.createElement(Label, _extends({
    className: classNameLabel,
    label: ""
  }, container), /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", _extends({
    className: classNameSlider
  }, slider))));
};

Switch.defaultProps = {
  classNameLabel: "switch",
  classNameSlider: "slider round"
};
Switch.propTypes = {
  label: PropTypes.string
};
export default Switch;