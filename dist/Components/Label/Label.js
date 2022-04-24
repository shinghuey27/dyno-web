"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Label.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// previously , for label we only open props.label , we kinda limiting the functionality of the default <label div element itself.
// to open back the functionality, we append both props.label and props.children for now, so that
// we dont have to refactor every molecules that uses label atom
// props: { label , children }
// will fix limitation in next iteration
var Label = function Label(props) {
  var label = props.label,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement("label", props, label, children);
};

Label.defaultProps = {
  label: "Default Label",
  className: "label"
};
Label.propTypes = {
  label: _propTypes.default.string
};
var _default = Label;
exports.default = _default;