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
  var name = props.name,
      item = props.item,
      error = props.error,
      _props$field = props.field,
      field = _props$field === void 0 ? {
    value: {}
  } : _props$field,
      datePicker = props.datePicker,
      endIconContainer = props.endIconContainer,
      label = props.label,
      labelProps = props.labelProps,
      container = props.container; // if (item === undefined) return null;
  // const { placeholder } = item;

  var value = field.value;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "input-icons"
  }, container), /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: label
  }, labelProps)), /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "icon"
  }, endIconContainer), /*#__PURE__*/_react.default.createElement(_Event.default, null)), /*#__PURE__*/_react.default.createElement(_Calendar.default, {
    selected: value,
    datePicker: datePicker
  }));
};

var _default = DatePicker;
exports.default = _default;