import Label from "../Label/Label";
import "./Checkbox.css";

const Checkbox = (props) => {

  const { container, input, checkMark } = props;
  
  return (
    <Label className="container"
      {...container}
    >
      <input type="checkbox"
        {...input}
      />
      <span className="checkmark" {...checkMark}></span>
    </Label>
  );
};

export default Checkbox;
