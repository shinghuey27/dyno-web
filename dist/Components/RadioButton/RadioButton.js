"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _RadioButtonModule = _interopRequireDefault(require("./RadioButton.module.scss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RadioButton = function RadioButton(props) {
  var container = props.container,
      input = props.input,
      checkMark = props.checkMark,
      label = props.label,
      classNameLabel = props.classNameLabel,
      classNameCheckMark = props.classNameCheckMark;
  var defaultLabel = typeof label === "string" ? label : "Default";
  return /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    className: classNameLabel,
    label: defaultLabel
  }, container), /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "radio",
    name: "radio"
  }, input)), /*#__PURE__*/_react.default.createElement("span", _extends({
    className: classNameCheckMark
  }, checkMark)));
};

RadioButton.defaultProps = {
  classNameLabel: _RadioButtonModule.default.container,
  classNameCheckMark: _RadioButtonModule.default.checkmark
};
RadioButton.propTypes = {
  label: _propTypes.default.string.isRequired
};
var _default = RadioButton;
exports.default = _default;