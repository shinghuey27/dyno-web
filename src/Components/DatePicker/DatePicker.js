import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";
import EventIcon from "@mui/icons-material/Event";
import Label from "../Label/Label";
import Calendar from "./Calendar";
import ErrorMessage from "../Label/ErrorMessage";



const DatePicker = (props) => {

  const {

    name,
    item,
    error,
    field = { value: undefined },
    endIconStyle,
    containerStyle,
    labelStyle,
    errorStyle,

  } = props;



  const { label, placeholder } = item || { label: "default error" };
  const { value } = field;

  return (
    <div
      className={containerStyle?.className}
      style={containerStyle?.style}
    >

      <Label
        label={label}
        className={labelStyle?.className}
        style={labelStyle?.className}
        {...props}></Label>

      <div
        className={endIconStyle?.className}
        style={endIconStyle?.style}
      >
        <EventIcon />
      </div>
      <Calendar
        name={name}
        selected={value}        
        {...props} // <--expose all props without destructuring in specific {...field}
      />
      <ErrorMessage
        className={errorStyle?.className}
        style={errorStyle?.style}
        {...props} />
    </div>
  );
};

DatePicker.defaultProps = {
  containerStyle: { className: "input-icons" },
  endIconStyle: { className: "icon" }

};

export default DatePicker;
