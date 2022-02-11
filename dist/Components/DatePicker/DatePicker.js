function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";
import EventIcon from "@mui/icons-material/Event";
import Label from "../Label/Label";
import Calendar from "./Calendar";

const DatePicker = props => {
  const {
    datePicker,
    endIconContainer,
    label,
    labelProps,
    container
  } = props;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "input-icons"
  }, container), /*#__PURE__*/React.createElement(Label, _extends({
    label: label
  }, labelProps)), /*#__PURE__*/React.createElement("div", _extends({
    className: "icon"
  }, endIconContainer), /*#__PURE__*/React.createElement(EventIcon, null)), /*#__PURE__*/React.createElement(Calendar, {
    datePicker: datePicker
  }));
};

export default DatePicker;