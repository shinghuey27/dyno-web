import Radio from "./Radio";
import Label from "../Label/Label";
import Description from "../Label/Description";
import "./RadioButton.css";
const RadioButton = (props) => {
  const { label, radio, description } = props;

  return (
    <div className="rContainer">
      {radio && <Radio className={radio.className} />}
      <div className="display">
        {label && (
          <Label
            label={label.label}
            style={label.style}
            className={label.className}
          />
        )}

        {description && (
          <Description
            label={description.label}
            style={description.style}
            className={description.className}
          />
        )}
      </div>
    </div>
  );
};

export default RadioButton;
