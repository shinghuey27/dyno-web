import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Date.css";

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      className="datepick"
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      dateFormat="d MMMM yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    >
    </DatePicker>
  );
};

export default DatePick;
