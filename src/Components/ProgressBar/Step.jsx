import React from "react";
import "./Stepper.css";

export default function Step(props) {
  const { text, children, container } = props;

  return (
    <div {...container}>
      {text}
      {children}
    </div>
  );
}

Step.defaultProps = {
  className: "step1"
};
