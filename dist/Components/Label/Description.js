"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Label.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function Description(props) {
  var label = props.label;
  return /*#__PURE__*/React.createElement("label", props, label);
};

Description.defaultProps = {
  label: "Default Description",
  className: "description"
};
Description.propTypes = {
  label: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = Description;
exports.default = _default;