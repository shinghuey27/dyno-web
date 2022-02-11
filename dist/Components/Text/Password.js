"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./Text.css");

var Password = function Password() {
  return /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Enter OTP",
    className: "password"
  });
};

var _default = Password;
exports.default = _default;