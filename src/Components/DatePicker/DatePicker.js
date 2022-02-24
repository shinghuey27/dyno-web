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
    calendarStyle

  } = props;



  const { label, placeholder } = item || { label: "default error" };
  const { value } = field;

  return (
    <div
      className={'input-icons'}
      {...containerStyle}
    >

      <Label
        label={label}
        {...labelStyle}
        {...props}></Label>

      <div
        className={'icon'}        
        {...endIconStyle}
      >
        <EventIcon />
      </div>
      <Calendar
        name={name}
        selected={value}
        {...field}
        {...calendarStyle}
        // {...props} // <--expose all props without destructuring in specific {...field}
      />
      <ErrorMessage        
        {...errorStyle}
        {...props} />
    </div>
  );
};

export default DatePicker;
