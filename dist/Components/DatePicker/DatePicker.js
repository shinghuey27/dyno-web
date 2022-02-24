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

var _ErrorMessage = _interopRequireDefault(require("../Label/ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DatePicker = function DatePicker(props) {
  var name = props.name,
      item = props.item,
      error = props.error,
      _props$field = props.field,
      field = _props$field === void 0 ? {
    value: undefined
  } : _props$field,
      endIconStyle = props.endIconStyle,
      containerStyle = props.containerStyle,
      labelStyle = props.labelStyle,
      errorStyle = props.errorStyle;

  var _ref = item || {
    label: "default error"
  },
      label = _ref.label,
      placeholder = _ref.placeholder;

  var value = field.value;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: containerStyle === null || containerStyle === void 0 ? void 0 : containerStyle.className,
    style: containerStyle === null || containerStyle === void 0 ? void 0 : containerStyle.style
  }, /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: label,
    className: labelStyle === null || labelStyle === void 0 ? void 0 : labelStyle.className,
    style: labelStyle === null || labelStyle === void 0 ? void 0 : labelStyle.style
  }, props)), /*#__PURE__*/_react.default.createElement("div", {
    className: endIconStyle === null || endIconStyle === void 0 ? void 0 : endIconStyle.className,
    style: endIconStyle === null || endIconStyle === void 0 ? void 0 : endIconStyle.style
  }, /*#__PURE__*/_react.default.createElement(_Event.default, null)), /*#__PURE__*/_react.default.createElement(_Calendar.default, _extends({
    name: name,
    selected: value
  }, props)), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, _extends({
    className: errorStyle === null || errorStyle === void 0 ? void 0 : errorStyle.className,
    style: errorStyle === null || errorStyle === void 0 ? void 0 : errorStyle.style
  }, props)));
};

DatePicker.defaultProps = {
  containerStyle: {
    className: "input-icons"
  },
  endIconStyle: {
    className: "icon"
  }
};
var _default = DatePicker;
exports.default = _default;