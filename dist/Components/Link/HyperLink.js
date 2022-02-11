"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Link.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HyperLink = function HyperLink(props) {
  var link = props.link,
      value = props.value;
  return /*#__PURE__*/_react.default.createElement("a", {
    className: "link",
    href: link,
    target: "_blank",
    rel: "norefer"
  }, value);
};

var _default = HyperLink;
exports.default = _default;