import React from 'react';
import "./Stepper.css";

export default function Step(props) {

    const { text, children } = props;

    return <div {...props}>{text}{children}</div>;
}

Step.defaultProps = {
    className: 'step1'
}


