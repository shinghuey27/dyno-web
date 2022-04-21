"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Text.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Text = function Text(props) {
  var id = props.id,
      name = props.name,
      placeholder = props.placeholder;
  return /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "text",
    id: id,
    name: name,
    placeholder: placeholder
  }, props));
};

Text.defaultProps = {
  className: "text"
};
Text.propTypes = {
  type: _propTypes.default.string,
  name: _propTypes.default.string,
  placeholder: _propTypes.default.string
};
var _default = Text;
exports.default = _default;