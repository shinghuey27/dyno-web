function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Label from "../Label/Label";
import "./Checkbox.css";
import PropTypes from "prop-types";

const Checkbox = props => {
  const {
    container,
    input,
    checkMark,
    label,
    classNameContainer,
    classNameCheckmark
  } = props;
  const defaultLabel = typeof label === "string" ? label : "Default";
  return /*#__PURE__*/React.createElement(Label, _extends({
    className: classNameContainer,
    label: defaultLabel
  }, container), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, input)), /*#__PURE__*/React.createElement("span", _extends({
    className: classNameCheckmark
  }, checkMark)));
};

Checkbox.defaultProps = {
  classNameContainer: "container",
  classNameCheckmark: "checkmark"
};
Checkbox.propTypes = {
  label: PropTypes.string
};
export default Checkbox;