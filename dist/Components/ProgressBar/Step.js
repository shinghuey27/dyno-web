import React from "react";
import "./Stepper.css";
import PropTypes from "prop-types";

const Step = props => {
  const {
    text,
    children
  } = props;
  return /*#__PURE__*/React.createElement("div", props, text, children);
};

Step.defaultProps = {
  className: "step1"
};
Step.propTypes = {
  text: PropTypes.string
};
export default Step;