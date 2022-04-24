"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Text.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Password = function Password() {
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Enter OTP",
    className: "password"
  });
};

var _default = Password;
exports.default = _default;