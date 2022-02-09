import "./Stepper.css";
import Tooltip from '@mui/material/Tooltip';
import Label from "../Label/Label";

const Hr = ({ ...hr }) => <hr style={{
  marginTop: 22,
  border: '1px dashed black',
  height: 0.1,
  flex: 1
}} {...hr} />

const Stepper = (props) => {

  const { container, stepper, stepper_one, stepper_two, stepper_three, label, hr } = props;

  return (

    <div className="progressContainer" {...container}>

      <div className="progressBar" {...stepper}>

        <div className="step1" {...stepper_one} >{stepper_one?.text}</div>

        {hr && Hr(hr)}

        < div className="step2" {...stepper_two} >{stepper_two?.text}</div>

        {hr && <hr style={{
          marginTop: 22,
          border: '1px solid black',
          height: 0.1,
          flex: 1
        }} />}

        <div className="step3" {...stepper_three} >{stepper_three?.text}</div>

      </div>

      {label && <Label label="Step 1/2" style={{ marginLeft: 15 }} {...label}></Label>}

    </div >

  );
};

export default Stepper;
