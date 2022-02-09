import React, { useState } from "react";
import DatePick from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";
import EventIcon from "@mui/icons-material/Event";
import Label from "../Label/Label";
import Calendar from "./Calendar";

const DatePicker = (props) => {

  const { datePicker, endIconContainer, label, labelProps, container } = props;

  return (
    <div className="input-icons" {...container}>

      <Label label={label} {...labelProps}></Label>
      <div className="icon" {...endIconContainer}>
        <EventIcon />
      </div>
      <Calendar datePicker={datePicker} />

    </div>
  );
};

export default DatePicker;
