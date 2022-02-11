"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("../Label/Label"));

require("./Switch.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Switch = function Switch(props) {
  var container = props.container,
      label = props.label,
      labelProps = props.labelProps,
      slider = props.slider,
      classNameLabel = props.classNameLabel,
      classNameSlider = props.classNameSlider;
  var defaultLabel = typeof label === "string" ? label : "Default";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, label && /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: defaultLabel
  }, labelProps)), /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    className: classNameLabel,
    label: ""
  }, container), /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/_react.default.createElement("span", _extends({
    className: classNameSlider
  }, slider))));
};

Switch.defaultProps = {
  classNameLabel: "switch",
  classNameSlider: "slider round"
};
Switch.propTypes = {
  label: _propTypes.default.string
};
var _default = Switch;
exports.default = _default;