"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("react-datepicker/dist/react-datepicker.css");

require("./Date.css");

var _Event = _interopRequireDefault(require("@mui/icons-material/Event"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DatePicker = function DatePicker(props) {
  var datePicker = props.datePicker,
      endIconContainer = props.endIconContainer,
      label = props.label,
      labelProps = props.labelProps,
      container = props.container;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "input-icons"
  }, container), /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: label
  }, labelProps)), /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "icon"
  }, endIconContainer), /*#__PURE__*/_react.default.createElement(_Event.default, null)), /*#__PURE__*/_react.default.createElement(_Calendar.default, {
    datePicker: datePicker
  }));
};

var _default = DatePicker;
exports.default = _default;