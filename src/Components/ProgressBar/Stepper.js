import "./Stepper.css";
import Tooltip from '@mui/material/Tooltip';
import Label from "../Label/Label";
import Step from "./Step";
import Line from "./Line";

// for stepper , it kinda needs few steps to work with, cannot work with just one stepper

const Stepper = (props) => {

  const { container, stepper, stepOne, stepTwo, stepThree, label, hr } = props;

  return (

    // << we are limited with only 2 or 3 stepper with this code design

    <div className={props.containerClassName} {...container}>

      <div className={props.stepperClassName} {...stepper}>

        {stepOne && <Step {...stepOne} />}

        {hr && <Line {...hr} />}

        {stepTwo && <Step {...stepTwo} />}

        {hr && <Line {...hr} />}

        {stepThree && <Step {...stepThree} />}

      </div>

      {label && <Label style={{ ...props.labelStyle }} {...label}></Label>}

    </div >

  );
};

Stepper.defaultProps = {
  labelStyle: {
    marginLeft: 15
  },
  containerClassName: 'progressContainer',
  stepperClassName: 'progressBar',

}

export default Stepper;
