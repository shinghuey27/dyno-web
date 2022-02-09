import "./Stepper.css";
import Tooltip from '@mui/material/Tooltip';
import Label from "../Label/Label";

const Stepper = (props) => {

  const { container, stepper, stepper_one, stepper_two, label } = props;

  return (

    <div className="progressContainer" {...container}>
      {/* <Tooltip title={'Click here or back to see your previous session'}> */}
      <div className="progressBar" {...stepper}>
        <div className="step1" {...stepper_one}></div>
        <div className="step2" {...stepper_two}></div>
      </div>
      {/* </Tooltip> */}
      <Label label="Step 2/2" style={{ marginLeft: 15 }} {...label}></Label>
    </div>

  );
};

export default Stepper;
