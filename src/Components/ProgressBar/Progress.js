import "./Progress.css";
import Tooltip from '@mui/material/Tooltip';

const Progress = () => {
  return (

    <div className="progressContainer">
      <Tooltip title={'Click here or back to see your previous session'}>
        <div className="progressBar">
          <div className="step1"></div>
          <div className="step2"></div>
        </div>
      </Tooltip>
      <span className="stepLabel"> Step 2/2</span>
    </div>

  );
};

export default Progress;
