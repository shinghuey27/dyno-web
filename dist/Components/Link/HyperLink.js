"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Link.css");

var HyperLink = function HyperLink(props) {
  var link = props.link,
      value = props.value;
  return /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: link,
    target: "_blank",
    rel: "norefer"
  }, value);
};

var _default = HyperLink;
exports.default = _default;