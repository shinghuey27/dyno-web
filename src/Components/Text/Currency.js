import React from 'react';
import NumberFormat from "react-number-format";
import "./Text.css";

const Currency = (props) => {
  return (
    <div className="currencyContainer">
      <span className="currencyIcon">{props.currency}</span>
      <NumberFormat
        type="text"
        id="currency"
        name="currency"
        placeholder="0.00"
        className="currency"
        thousandSeparator=","
        decimalSeparator="."
        decimalScale={2}
        fixedDecimalScale={true}
      ></NumberFormat>
    </div>
  );
};

export default Currency;
