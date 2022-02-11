"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function ListItem(props) {
  var data = props.data;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

ListItem.defaultProps = {
  listStyleType: "none",
  padding: 5,
  fontSize: 15,
  backgroundColor: "white"
};
var _default = ListItem;
exports.default = _default;