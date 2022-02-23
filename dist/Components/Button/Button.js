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
  // const {
  //   disabled,
  //   label
  // } = props;
  var item = props.item,
      error = props.error,
      managedCallback = props.managedCallback;
  var action = item.action,
      label = item.label;

  var onClick = function onClick() {
    return managedCallback(action === null || action === void 0 ? void 0 : action.actionURL);
  };

  var disabled = error && Object.keys(error).length > 0 || false;
  var className = disabled ? 'button-disabled' : 'button';
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: className,
    disabled: disabled,
    onClick: onClick
  }, props), label);
};

Button.defaultProps = {
  item: {
    label: 'Default'
  },
  disabled: false
};
Button.propTypes = {
  label: _propTypes.default.string.isRequired,
  managedCallback: _propTypes.default.func,
  onMouseOver: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
var _default = Button;
exports.default = _default;