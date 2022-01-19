import Label from "../Label/Label";
import "./Tooltips.css";

const Tooltips = () => {
  return (
    <div className="tooltip">
      <Label value="Tooltip" />
      <span className="tooltiptext">
        Click here or <b>Previous button</b> to view your previous session
      </span>
    </div>
  );
};

export default Tooltips;
