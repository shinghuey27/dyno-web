import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";
import EventIcon from "@mui/icons-material/Event";

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="input-icons">
      <i className="icon">
        <EventIcon />
      </i>
      <DatePicker
        className="datepick"
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
        dateFormat="d MMMM yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      ></DatePicker>
    </div>
  );
};

export default DatePick;
