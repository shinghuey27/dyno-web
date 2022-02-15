"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("../Label/Label"));

require("./Checkbox.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Checkbox = function Checkbox(props) {
  var container = props.container,
      checkMark = props.checkMark,
      label = props.label,
      field = props.field,
      classNameContainer = props.classNameContainer,
      classNameCheckmark = props.classNameCheckmark;
  var defaultLabel = typeof label === "string" ? label : "Default";
  return /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    className: classNameContainer,
    label: defaultLabel
  }, container), /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "checkbox"
  }, field)), /*#__PURE__*/_react.default.createElement("span", _extends({
    className: classNameCheckmark
  }, checkMark)));
};

Checkbox.defaultProps = {
  classNameContainer: "container",
  classNameCheckmark: "checkmark"
};
Checkbox.propTypes = {
  label: _propTypes.default.string
};
var _default = Checkbox;
exports.default = _default;