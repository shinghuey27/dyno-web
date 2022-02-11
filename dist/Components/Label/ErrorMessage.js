"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Label.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(props) {
  var label = props.label;
  return /*#__PURE__*/_react.default.createElement("div", props, label);
};

ErrorMessage.defaultProps = {
  label: "default error",
  className: "errorMessage"
};
ErrorMessage.propTypes = {
  label: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = ErrorMessage;
exports.default = _default;