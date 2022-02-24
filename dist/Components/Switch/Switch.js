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
  var containerStyle = props.containerStyle,
      labelStyle = props.labelStyle,
      item = props.item,
      field = props.field,
      sliderStyle = props.sliderStyle;

  var _ref = item || {
    label: ""
  },
      label = _ref.label;

  var defaultLabel = typeof label === "string" ? label : "Default";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, label && /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: defaultLabel
  }, labelStyle)), /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    className: 'switch',
    label: ""
  }, containerStyle), /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "checkbox"
  }, field)), /*#__PURE__*/_react.default.createElement("span", _extends({
    className: 'slider round'
  }, sliderStyle))));
};

var _default = Switch;
exports.default = _default;