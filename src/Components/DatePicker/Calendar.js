import React, { useState } from 'react';
import DatePick from "react-datepicker";

export default function Calendar(props) {
    const { field } = props

    return <DatePick
        className="datepick"
        {...field}
        {...props}
    />;
}
