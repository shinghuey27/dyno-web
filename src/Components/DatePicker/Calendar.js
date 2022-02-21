import React, { useState } from 'react';
import DatePick from "react-datepicker";

export default function Calendar(props) {

    return <DatePick
        className="datepick"
        {...props}
    />;
}
