import React from "react";
import "./Stepper.css";
import PropTypes from "prop-types";

const Step = (props) => {
  const {
    text,
    children } = props;

  return (
    <div {...props}>
      {text}
      {children}
    </div>
  );
}

Step.defaultProps = {
  className: "step1"
};

Step.propTypes = {
  text: PropTypes.string,
};

export default Step;