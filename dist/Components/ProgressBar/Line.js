"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Line = function Line(props) {
  return /*#__PURE__*/_react.default.createElement("hr", props);
};

Line.defaultProps = {
  style: {
    marginTop: 22,
    border: "1px dashed black",
    height: 0.1,
    flex: 1
  }
};
var _default = Line;
exports.default = _default;