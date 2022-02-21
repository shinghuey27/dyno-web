import React from 'react';
import DatePick from "react-datepicker";

export default function Calendar(props) {

    const { selected, datePicker } = props

    return <DatePick
        className="datepick"
        selected={selected}
        // calendarContainer={({ className, children }) => renderCalendar({ className, children })}
        // formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
        // dateFormat="d MMMM yyyy"
        // selected={startDate}
        // onChange={(date) => setStartDate(date)}
        // showYearDropdown
        // yearDropdownItemNumber={10}
        // scrollableYearDropdown  

        {...datePicker}
    />;
}
