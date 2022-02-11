function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import DatePick from "react-datepicker";
export default function Calendar({
  datePicker
}) {
  return /*#__PURE__*/React.createElement(DatePick, _extends({
    className: "datepick" // calendarContainer={({ className, children }) => renderCalendar({ className, children })}
    // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
    // dateFormat="d MMMM yyyy"
    // selected={startDate}
    // onChange={(date) => setStartDate(date)}
    // showYearDropdown
    // yearDropdownItemNumber={10}
    // scrollableYearDropdown  

  }, datePicker));
}