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
      errorStyle = props.errorStyle,
      calendarStyle = props.calendarStyle;

  var _ref = item || {
    label: "default error"
  },
      label = _ref.label,
      placeholder = _ref.placeholder;

  var value = field.value;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'input-icons'
  }, containerStyle), /*#__PURE__*/_react.default.createElement(_Label.default, _extends({
    label: label
  }, labelStyle, props)), /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'icon'
  }, endIconStyle), /*#__PURE__*/_react.default.createElement(_Event.default, null)), /*#__PURE__*/_react.default.createElement(_Calendar.default, _extends({
    name: name,
    selected: value
  }, field, calendarStyle)), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, _extends({}, errorStyle, props)));
};

var _default = DatePicker;
exports.default = _default;