import NumberFormat from "react-number-format";
import "./Text.css";

const Currency = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "currencyContainer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "currencyIcon"
  }, props.currency), /*#__PURE__*/React.createElement(NumberFormat, {
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

export default Currency;