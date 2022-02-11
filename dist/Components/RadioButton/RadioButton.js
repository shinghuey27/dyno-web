function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Label from "../Label/Label";
import styles from "./RadioButton.module.scss";
import PropTypes from "prop-types";

const RadioButton = props => {
  const {
    container,
    input,
    checkMark,
    label,
    classNameLabel,
    classNameCheckMark
  } = props;
  const defaultLabel = typeof label === "string" ? label : "Default";
  return /*#__PURE__*/React.createElement(Label, _extends({
    className: classNameLabel,
    label: defaultLabel
  }, container), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: "radio"
  }, input)), /*#__PURE__*/React.createElement("span", _extends({
    className: classNameCheckMark
  }, checkMark)));
};

RadioButton.defaultProps = {
  classNameLabel: styles.container,
  classNameCheckMark: styles.checkmark
};
RadioButton.propTypes = {
  label: PropTypes.string.isRequired
};
export default RadioButton;