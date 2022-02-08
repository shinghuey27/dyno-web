import React, { useState } from "react";
import DatePick from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";
import EventIcon from "@mui/icons-material/Event";
import Label from "../Label/Label";

const DatePicker = (props) => {
  
  const { datePicker, endIconContainer, label, container } = props;  
  
  return (
    <div className="input-icons" {...container}>

      <Label {...label}></Label>
      <div className="icon" {...endIconContainer}>
        <EventIcon />
      </div>
      <DatePick
        className="datepick"

        // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
        // dateFormat="d MMMM yyyy"
        // selected={startDate}
        // onChange={(date) => setStartDate(date)}
        // showYearDropdown
        // yearDropdownItemNumber={10}
        // scrollableYearDropdown
        {...datePicker}
      />

    </div>
  );
};

export default DatePicker;
