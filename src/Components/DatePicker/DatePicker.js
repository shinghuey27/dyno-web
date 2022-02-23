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
    endIconContainer,
    datePicker,    
    container
  } = props;

  const { label, placeholder } = item || { label: "default error" };
  const { value } = field;

  return (
    <div name={name} className="input-icons" {...container}>

      <Label label={label} {...props}></Label>
      <div className="icon" {...endIconContainer}>
        <EventIcon />
      </div>
      <Calendar
        selected={value}
        {...field}
        {...datePicker}  
      // {...props} // <--expose all props without destructuring in specific
      />
      <ErrorMessage {...props} />
    </div>
  );
};

export default DatePicker;
