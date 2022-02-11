function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import "./Stepper.css";
import Label from "../Label/Label";
import Step from "./Step";
import Line from "./Line";
import PropTypes from "prop-types"; // for stepper , it kinda needs few steps to work with, cannot work with just one stepper

const Stepper = props => {
  const {
    container,
    stepper,
    stepOne,
    stepTwo,
    stepThree,
    label,
    hr,
    containerClassName,
    stepperClassName
  } = props;
  return (
    /*#__PURE__*/
    // << we are limited with only 2 or 3 stepper with this code design
    React.createElement("div", _extends({
      className: containerClassName
    }, container), /*#__PURE__*/React.createElement("div", _extends({
      className: stepperClassName
    }, stepper), stepOne && /*#__PURE__*/React.createElement(Step, stepOne), hr && /*#__PURE__*/React.createElement(Line, hr), stepTwo && /*#__PURE__*/React.createElement(Step, stepTwo), hr && /*#__PURE__*/React.createElement(Line, hr), stepThree && /*#__PURE__*/React.createElement(Step, stepThree)), label && /*#__PURE__*/React.createElement(Label, label))
  );
};

Stepper.defaultProps = {
  labelStyle: {
    marginLeft: 15
  },
  containerClassName: "progressContainer",
  stepperClassName: "progressBar"
};
Stepper.propTypes = {
  label: PropTypes.string
};
export default Stepper;