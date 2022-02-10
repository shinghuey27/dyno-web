import "./Stepper.css";
import Label from "../Label/Label";
import Step from "./Step";
import Line from "./Line";
import PropTypes from "prop-types";

// for stepper , it kinda needs few steps to work with, cannot work with just one stepper

const Stepper = (props) => {
  const {
    container,
    stepper,
    stepOne,
    stepTwo,
    stepThree,
    label,
    hr,
    containerClassName,
    stepperClassName,
  } = props;

  return (
    // << we are limited with only 2 or 3 stepper with this code design

    <div className={containerClassName} {...container}>
      <div className={stepperClassName} {...stepper}>
        {stepOne && <Step {...stepOne} />}

        {hr && <Line {...hr} />}

        {stepTwo && <Step {...stepTwo} />}

        {hr && <Line {...hr} />}

        {stepThree && <Step {...stepThree} />}
      </div>

      {label && <Label {...label}></Label>}
    </div>
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
  label: PropTypes.string,  
};
export default Stepper;
