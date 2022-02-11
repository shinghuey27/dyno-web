"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

require("./Text.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Currency = function Currency(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "currencyContainer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "currencyIcon"
  }, props.currency), /*#__PURE__*/React.createElement(_reactNumberFormat.default, {
    type: "text",
    id: "currency",
    name: "currency",
    placeholder: "0.00",
    className: "currency",
    thousandSeparator: ",",
    decimalSeparator: ".",
    decimalScale: 2,
    fixedDecimalScale: true
  }));
};

var _default = Currency;
exports.default = _default;