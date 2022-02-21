import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";
import EventIcon from "@mui/icons-material/Event";
import Label from "../Label/Label";
import Calendar from "./Calendar";



const DatePicker = (props) => {

  const {

    name,
    item,
    error,
    field = { value: {} },

    datePicker,
    endIconContainer,
    label,
    labelProps,
    container
  } = props;

  // if (item === undefined) return null;

  // const { placeholder } = item;
  const { value } = field;

  return (
    <div className="input-icons" {...container}>

      <Label label={label} {...labelProps}></Label>
      <div className="icon" {...endIconContainer}>
        <EventIcon />
      </div>
      <Calendar selected={value}  datePicker={datePicker} />

    </div>
  );
};

export default DatePicker;
