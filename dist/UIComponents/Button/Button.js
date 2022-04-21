"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Button.css");

require("../../index.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = function Button(props) {
  var name = props.name,
      id = props.id,
      item = props.item,
      error = props.error,
      managedCallback = props.managedCallback,
      disabled = props.disabled,
      text = props.text;

  var _ref = item || {
    label: 'Default'
  },
      action = _ref.action,
      label = _ref.label;

  var onClick = function onClick() {
    return managedCallback(action === null || action === void 0 ? void 0 : action.actionURL);
  };

  var disabled_dynamo = error && Object.keys(error).length > 0 || false;
  var className = disabled || disabled_dynamo ? 'button-disabled' : 'button';

  var renderText = function renderText() {
    return text ? text : label;
  };

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    name: name,
    id: id,
    className: className,
    disabled: disabled || disabled_dynamo,
    onClick: onClick
  }, props), renderText());
};

var _default = Button;
exports.default = _default;