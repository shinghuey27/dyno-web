"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Label.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isErrorForm = require("../../Utils/isErrorForm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ErrorMessage = function ErrorMessage(props) {
  var name = props.name,
      item = props.item,
      error = props.error,
      errorClassName = props.errorClassName,
      errorStyle = props.errorStyle;
  if (error === undefined) return null;
  var errorMsg = error && error[name] && error[name].message || "default error";
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: errorClassName,
    style: errorStyle
  }, props), (0, _isErrorForm.renderError)(name, error) && errorMsg);
};

ErrorMessage.defaultProps = {
  className: "errorMessage"
};
ErrorMessage.propTypes = {
  className: _propTypes.default.string
};
var _default = ErrorMessage;
exports.default = _default;