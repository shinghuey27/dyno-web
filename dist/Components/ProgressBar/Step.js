"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Stepper.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Step = function Step(props) {
  var text = props.text,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement("div", props, text, children);
};

Step.defaultProps = {
  className: "step1"
};
Step.propTypes = {
  text: _propTypes.default.string
};
var _default = Step;
exports.default = _default;