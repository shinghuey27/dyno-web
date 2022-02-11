"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Tooltips.css");

var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));

var _react = _interopRequireDefault(require("react"));

var _HelpOutline = _interopRequireDefault(require("@mui/icons-material/HelpOutline"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tooltips = function Tooltips(props) {
  var label = props.label,
      icon = props.icon,
      tooltip = props.tooltip;
  return /*#__PURE__*/_react.default.createElement(_Tooltip.default, _extends({
    title: label
  }, tooltip), /*#__PURE__*/_react.default.createElement(_HelpOutline.default, _extends({
    fontSize: "10px",
    style: {
      marginLeft: 5
    }
  }, icon)));
};

Tooltips.defaultProps = {
  label: ""
};
Tooltips.propTypes = {
  label: _propTypes.default.string
};
var _default = Tooltips;
exports.default = _default;